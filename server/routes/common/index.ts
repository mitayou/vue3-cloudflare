import { RouteHandler } from '../index'

// 注册通用路由
export function registerCommonRoutes(router: any) {
  // 添加API根路由
  router.get('/api/', () => {
    return Response.json({
      name: 'Vue Cloudflare Worker',
      status: 'running'
    })
  })

  // 404路由处理 - 捕获所有未匹配的路由
  router.all('*', () => {
    return new Response('404 - 页面未找到', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    })
  })

  return router
}
