import { defineComponent, h, getCurrentInstance, unref } from "vue"

export default defineComponent({
  setup() {
    return () => {
      let component
      // 获取app实例中的$router
      const {
        proxy: { $router },
      } = getCurrentInstance()
      // 通过$router.current获取当前的路由hash
      const currentHash = unref($router.current)
      // 通过$router.options遍历查找与当前current匹配的路由并保存在component变量中
      const route = $router.options.routes.find(
        (route) => route.path === currentHash
      )

      if (route) {
        component = route.component
        return h(component)
      } else {
        console.warn("no match component")
        return h("div", "")
      }
    }
  },
})
