<script  lang="ts">
export default {
  name: "ErrorBoundary",
  props: {
    fallback: {
      type: [Object, Function],
      default: null,
    },
  },
  data() {
    return {
      error: null,
    };
  },
  computed: {
    fallbackComponent() {
      return this.fallback;
    },
  },
  errorCaptured(err : any) {
    this.error = err;
    return false;
  },
};
</script>


<template>
    <div>
      <slot v-if="!error" />
      <component v-else :is="fallbackComponent" :error="error" />
    </div>
  </template>

<style scoped lang="scss">
</style>

  