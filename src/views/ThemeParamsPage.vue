<template>
  <div class="connect-page">
    <div class="m-content">
      <display-data :rows="rows"></display-data>
    </div>
  </div>
</template>
      
      <script lang="ts">
import Link from "../components/Link.vue";
import Cell from "../components/Cell.vue";
import DisplayData, { DisplayDataRow } from "../components/DisplayData.vue";
import { useThemeParams } from "@tma.js/sdk-vue";

export default {
  name: "ThemeParamsPage",
  components: { Link, Cell, DisplayData },
  setup() {
    const themeParams = useThemeParams();
    const rows: DisplayDataRow[] = Object.entries(themeParams.getState()).map(
      ([title, value]) => ({
        title: title
          .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
          .replace(/background/, "bg"),
        value,
      })
    );
    return {rows};
  },
};
</script>
      
      <style scoped lang="scss">
.connect-page {
  padding: 0 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // height: 100vh;
  overflow-y: auto;

  .m-content{
    margin: 40px 0;
  }
  text-align: left;
}
</style>
      