
<script  lang="ts">
import { isRGB } from "@tma.js/sdk-vue";
import { onMounted } from "vue";
import Cell from "./Cell.vue";
import Link from "./Link.vue";
import RGB from "./RGB.vue";

export type DisplayDataRow = {
  title: string;
  value: any;
  type?: string;
};

export default {
  name: "DisplayData",
  props: {
    rows: {
      type: Array<DisplayDataRow>,
    },
    header: {
      type: String,
      default: "",
    },
  },
  components: { Cell, Link, RGB },
  setup(props) {
    // const valueNode;
    function getClassName(index: number) {
      let cls = "";
      if (index === 0) cls += "first-item";
      if (index === props.rows!.length - 1) cls += "last-item";
      return cls;
    }
    onMounted(() => {
      // valueNode
    });
    return {
      isRGB,
      getClassName,
    };
  },
};
</script>


<template>
  <h5 class="m-header">{{ header }}</h5>
  <div class="m-display-data-wrapper">
    <Cell
      v-for="(item, index) in rows"
      :key="item.title"
      :class="getClassName(index)"
      :title="item.title"
      :subtitle="
        typeof item.value === 'string' && !isRGB(item.value)
          ? item.value.toString()
          : ''
      "
    >
      <template v-slot:subtitle>
        <RGB :color="item.value" v-if="isRGB(item.value)"></RGB>
        <i v-else-if="item.value === undefined">empty</i>
        <i v-else-if="item.value === false">❌</i>
        <i v-else-if="item.value === true">✔️</i>
        <!-- <Checkbox v-else-if="typeof item.value === 'boolean'" checked={item.value} disabled/> -->
      </template>
    </Cell>
  </div>
</template>

<style scoped lang="scss">
.m-header {
  padding-left: 10px;
  color: var(--tgui--subtitle_text_color);
}
.m-display-data-wrapper {
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background: var(--tgui--bg_color);
  .first-item {
    border-radius: 12px 12px 0 0;
  }
  .last-item {
    border-radius: 0 0 12px 12px;
  }
}
</style>
