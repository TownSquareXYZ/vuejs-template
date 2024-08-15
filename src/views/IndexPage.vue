<template>
  <div class="index-page">
    <div>
      <h4>Features</h4>
      <Link :to="`/ton-connect`">
        <Cell style="border-radius: 12px"
        :title="`Ton Connect`" :subtitle="`Connect your TON wallet`">
          <template v-slot:before>
            <img class="m-img" src="../assets/ton.svg" />
          </template>
        </Cell>
      </Link>
      <h5>
        You can use these pages to learn more about features, provided by
        Telegram Mini Apps and other useful projects
      </h5>
    </div>
    <div>
      <h4>Application Launch Data</h4>
      <div class="m-bottom-wrapper">
        <Link :to="`/init-data`">
          <Cell
            style="border-radius: 12px 12px 0 0"
            :title="`Init Data`"
            :subtitle="`User data, chat information, technical data`"
          >
          </Cell>
        </Link>
        <Link :to="`/launch-params`">
          <Cell
            :title="`Launch Parameters`"
            :subtitle="`Platform identifier, Mini Apps version, etc.`"
          ></Cell>
        </Link>
        <Link :to="`/theme-params`">
          <Cell
            style="border-radius: 0 0 12px 12px"
            :title="`Theme Parameters`"
            :subtitle="`Telegram application palette information`"
          ></Cell>
        </Link>
      </div>

      <h5>
        These pages help developer to learn more about current launch
        information
      </h5>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { onMounted } from "vue";
import Link from "../components/Link.vue";
import Cell from "../components/Cell.vue";

export default {
  name: "IndexPage",
  components: { Link, Cell },
  setup() {
    onMounted(() => {});
  },
};
</script>
  
  <style scoped lang="scss">
.index-page {
  padding: 0 24px;
  height: 100vh;
  background-color: #eeedf2;
  text-align: left;
  .m-img {
    width: 54px;
    height: 54px;
    background-color: #007aff;
    border-radius: 10px;
    display: inline-block;
  }
}
</style>
  