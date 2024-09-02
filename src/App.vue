<script setup lang="ts">
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  MiniApp,
  ThemeParams,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
  Viewport,
} from "@tma.js/sdk-vue";
import { onMounted } from "vue";
const lp = useLaunchParams(true);
const miniApp = useMiniApp() as unknown as MiniApp;
const themeParams = useThemeParams() as unknown as ThemeParams;
const viewport = useViewport() as unknown as Viewport;

// Bind CSS vars on component mount and when dependencies change
onMounted(() => {
  bindMiniAppCSSVars(miniApp, themeParams);
  bindThemeParamsCSSVars(themeParams);
  if (viewport) {
    bindViewportCSSVars(viewport);
  }
  // console.log("-----<", themeParams, viewport , lp);
});
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
