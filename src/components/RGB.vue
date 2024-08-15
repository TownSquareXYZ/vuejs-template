<template>
  <span class="rgb">
    <i class="rgb__icon" :style="{ backgroundColor: color }"></i>
    {{ color }}
  </span>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { RGB as RGBType } from "@tma.js/sdk-vue";

export default defineComponent({
  name: "RGB",
  props: {
    classNames: {
      type: String,
      default: "",
    },
    color: {
      type: String as () => RGBType,
      required: true,
    },
  },
});
</script>
  
  <style scoped lang="scss">
.rgb {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.rgb__icon {
  width: 18px;
  aspect-ratio: 1;
  border: 1px solid #555;
  border-radius: 50%;
}
</style>
  