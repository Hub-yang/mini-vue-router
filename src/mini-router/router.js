import { ref } from "vue"
import RouterLink from "./RouterLink"
import RouterView from "./RouterView"

export const createRouter = (options) => {
  // 1.创建router实例
  const router = {
    // 初始化options，保存router的配置项
    options,
    // 初始化current，保存当前的hash值
    current: ref(window.location.hash || "/"),
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

  // 监听hashchange事件
  window.addEventListener("hashchange", () => {
    // 将hash变化的结果保存在router实例的current变量中，供后续<router-view>使用
    router.current.value = window.location.hash.slice(1)
  })

  return router
}
