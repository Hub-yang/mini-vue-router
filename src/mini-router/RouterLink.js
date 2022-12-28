import { defineComponent, h, unref } from "vue"

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => {
      // 由于用户传入to属性值可能是字符串也可能是动态的ref，因此做一次脱壳处理
      const to = unref(props.to)
      return h(
        "a",
        {
          // 设置a标签的href属性,注意拼接
          href: "#" + to,
        },
        slots.default()
      )
    }
  },
})
