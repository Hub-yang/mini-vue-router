import RouterLink from "./RouterLink"
import RouterView from "./RouterView"

export const createRouter = (options) => {
  // 1.创建router实例
  const router = {
    // 2.实现install方法,接收app实例
    install(app) {
      // 保存上下文this，供注册全局变量时使用
      const router = this
      // 3.注册两个全局组件
      app.component("router-link", RouterLink)
      app.component("router-view", RouterView)
      // 4.注册全局$router变量,$route类似
      app.config.globalProperties.$router = router
    },
  }
  return router
}
