import router from './routes'
import { registerDoorRoutes } from './routes/door'
import { registerCommonRoutes } from './routes/common'

// 注册所有路由
registerCommonRoutes(router)
registerDoorRoutes(router)

// 导出路由实例
export default router
