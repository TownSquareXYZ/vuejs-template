<template>
  <div>This will throw an error.</div>
</template>
  
  <script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ErrorThrower",
  setup() {
    onMounted(() => {
      throw new Error("This is a test error!");
    });
  },
});
</script>