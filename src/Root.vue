<script setup lang="ts">
import App from "./App.vue";
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue";
import { SDKProvider } from "@tma.js/sdk-vue";

const options = {
  manifestUrl: "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json",
};
</script>
<template>
  <TonConnectUIProvider :options="options">
    <SDKProvider>
      <App></App>
    </SDKProvider>
  </TonConnectUIProvider>
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
