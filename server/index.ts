import router from './router'

export default {
  async fetch(request: Request) {
    try {
      // 使用自定义路由处理请求
      let response = await router.handle(request)

      // 如果路由没有返回Response对象，则创建一个默认响应
      if (!response) {
        response = new Response('No response from router', {
          status: 500,
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        })
      }

      // 确保返回的是一个有效的Response对象
      if (!(response instanceof Response)) {
        console.error('Invalid response type:', typeof response)
        return new Response('Invalid response type from router', {
          status: 500,
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        })
      }

      return response
    } catch (error: any) {
      // 捕获并处理任何错误
      console.error('Router error:', error)
      return new Response(`Server error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      })
    }
  }
}
