<template>
  <router-link
    v-bind="$attrs"
    :to="to"
    @click="onClick"
    :class="computedClassName"
  >
    <slot></slot>
  </router-link>
</template>
  
  <script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { useUtils } from "@tma.js/sdk-vue";
import {Path} from '../utils/types'

export default defineComponent({
  name: "Link",
  props: {
    className: String,
    to: {
      type: [String, Object] as PropType<string | Path>,
      required: true,  // 是否必填视具体需求而定
    },
    onClick: Function as () => void,
  },
  setup(props) {
    const utils = useUtils();

    const onClick = (e: MouseEvent) => {
      let path: string;
      if (typeof props.to === "string") {
        path = props.to;
      } else {
        const { search = "", pathname = "", hash = "" } = props.to!!;
        path = `${pathname}?${search}#${hash}`;
      }
      // console.log(path);

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host;

      if (isExternal) {
        e.preventDefault();
        return utils.openLink(targetUrl.toString());
      }
    };

    const computedClassName = computed(() => {
      return ["link", props.className].filter(Boolean).join(" ");
    });

    return {
      onClick,
      computedClassName,
    };
  },
});
</script>
  
  <style scoped>
.link {
  /* 样式定义 */
}
</style>
  