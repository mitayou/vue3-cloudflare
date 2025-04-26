import { RouteHandler } from '../index'

// 注册门禁相关路由
export function registerDoorRoutes(router: any) {
  // 门禁密码路由
  router.get('/api/door/password', () => {
    try {
      return Response.json({
        password: Math.floor(100000 + Math.random() * 900000).toString()
      })
    } catch (error: any) {
      return new Response(`Error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      })
    }
  })

  // 开门控制路由
  router.post('/api/door/open', async () => {
    try {
      // 等待1秒模拟开门过程
      await new Promise(resolve => setTimeout(resolve, 1000))

      return Response.json({
        success: true,
        message: '门已打开'
      })
    } catch (error: any) {
      return new Response(`Error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      })
    }
  })

  return router
}
