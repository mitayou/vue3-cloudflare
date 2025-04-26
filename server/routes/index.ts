// 定义路由处理器类型
export type RouteHandler = (request: Request, params?: Record<string, string>) => Response | Promise<Response>

// 定义路由映射类型
export interface Routes {
  [path: string]: {
    [method: string]: RouteHandler
  }
}

// 路由映射表
const routes: Routes = {}

// 注册路由的辅助函数
export function registerRoute(method: string, path: string, handler: RouteHandler) {
  if (!routes[path]) {
    routes[path] = {}
  }
  routes[path][method] = handler
}

// 创建路由器实例
export function createRouter() {
  // 路由方法
  const router = {
    // GET 请求路由
    get: (path: string, handler: RouteHandler) => {
      registerRoute('GET', path, handler)
      return router
    },

    // POST 请求路由
    post: (path: string, handler: RouteHandler) => {
      registerRoute('POST', path, handler)
      return router
    },

    // 处理所有方法的路由
    all: (path: string, handler: RouteHandler) => {
      registerRoute('ALL', path, handler)
      return router
    },

    // 路由处理函数
    handle: async (request: Request) => {
      const url = new URL(request.url)
      const path = url.pathname
      const method = request.method

      // 检查是否有精确匹配的路由
      if (routes[path] && (routes[path][method] || routes[path]['ALL'])) {
        const handler = routes[path][method] || routes[path]['ALL']
        return await handler(request, {})
      }

      // 检查通配符路由
      if (routes['*'] && (routes['*'][method] || routes['*']['ALL'])) {
        const handler = routes['*'][method] || routes['*']['ALL']
        return await handler(request, {})
      }

      // 默认返回404
      return new Response('404 - 页面未找到', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8'
        }
      })
    }
  }

  return router
}

// 创建默认路由器实例
const router = createRouter()

// 导出路由实例
export default router
