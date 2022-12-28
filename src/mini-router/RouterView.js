import { defineComponent, h } from "vue"

export default defineComponent({
  setup() {
    return () => h("div", "router-view")
  },
})
