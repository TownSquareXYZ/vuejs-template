<template>
  <div class="launch-params-page">
    <div class="m-content">
      <display-data :rows="rows"></display-data>
    </div>
  </div>
</template>
        
<script lang="ts">
import Link from "../components/Link.vue";
import Cell from "../components/Cell.vue";
// import { useUtils } from "@tma.js/sdk-vue";
import DisplayData, { DisplayDataRow } from "../components/DisplayData.vue";
import { useLaunchParams } from "@tma.js/sdk-vue";

export default {
  name: "LaunchParamsPage",
  components: { Link, Cell, DisplayData },
  setup() {
    const lp = useLaunchParams(true);
    // console.log(lp);

    const rows: DisplayDataRow[] = [
      { title: "tgWebAppPlatform", value: lp?.platform },
      { title: "tgWebAppShowSettings", value: lp?.showSettings },
      { title: "tgWebAppVersion", value: lp?.version },
      { title: "tgWebAppBotInline", value: lp?.botInline },
      { title: "tgWebAppStartParam", value: lp?.startParam },
      { title: "tgWebAppData", type: "link", value: "/init-data" },
      { title: "tgWebAppThemeParams", type: "link", value: "/theme-params" },
    ];

    return { rows };
  },
};
</script>
        
        <style scoped lang="scss">
.launch-params-page {
  padding: 0 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // height: 100vh;
  overflow-y: auto;

  .m-content {
    margin: 40px 0;
  }
  text-align: left;
}
</style>
        