<template>
  <ErrorBoundary :fallback="ErrorBoundaryError">
    <TonConnectUIProvider :options="options">
      <SDKProvider>
        <App></App>
      </SDKProvider>
    </TonConnectUIProvider>
  </ErrorBoundary>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import App from "./App.vue";
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue";
import { SDKProvider } from "@tma.js/sdk-vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";

export default {
  name: "Root",
  components:{App , TonConnectUIProvider , SDKProvider , ErrorBoundary},
  setup() {
    const options = {
      manifestUrl:
        "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json",
    };

    const ErrorBoundaryError = defineComponent({
      props: {
        error: {
          type: [String, Object],
          required: true,
        },
      },
      setup(props) {
        const errorMessage = computed(() => {
          console.log('------ error',props);
          if (props.error instanceof Error) {
            return props.error.message;
          } else if (typeof props.error === "string") {
            return props.error;
          } else {
            return JSON.stringify(props.error);
          }
        });

        return { errorMessage };
      },
      template: `
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>{{ errorMessage }}</code>
      </blockquote>
    </div>
  `,
    });
    return { options, ErrorBoundaryError };
  },
};
</script>