<script setup lang="ts">
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  MiniApp,
  ThemeParams,
  useMiniApp,
  useThemeParams,
  useViewport,
  Viewport,
} from "@tma.js/sdk-vue";
import { onMounted } from "vue";
// import ErrorThrower from "./components/ErrorThrower.vue";
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
});
</script>

<template>
  <router-view />
  <!-- <ErrorThrower /> -->
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
