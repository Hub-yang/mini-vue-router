import { createApp } from "vue"
import "./style.css"
import router from "./mini-router"
import App from "./App.vue"

const app = createApp(App)
app.use(router).mount("#app")
