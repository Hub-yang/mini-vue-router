// 1.导入组件
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import { createRouter, createWebHashHistory } from "vue-router"

// 2.配置路由组件映射表
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
