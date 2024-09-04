<script  lang="ts">
export default {
  name: "Cell",
  props: {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>


<template>
  <!-- <h1>{{ title }}</h1> -->
  <div class="m-cell-wrapper">
    <slot name="before"></slot>
    <div class="txt-wrapper">
      <div class="cell-title">{{ title }}</div>
      <slot name="subtitle"></slot>
      <div class="cell-subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.m-cell-wrapper {
  background-color: white;
  //   border-radius: 10px;
  padding: 14px;
  display: flex;
  align-items: center;
  //   width: 200px;

  .txt-wrapper {
    display: inline-block;
    margin-left: 10px;
    .cell-title {
      line-height: 32px;
      font-weight: bold;
      color: #007aff;
    }
    .cell-subtitle {
      color: var(--tgui--hint_color);
      font-size: 14px;
      word-break: break-all;
    }
  }
}
.m-cell-wrapper:hover {
  background: #f2f2f6;
  // background: var(--tgui--secondary_bg_color);
}
</style>
