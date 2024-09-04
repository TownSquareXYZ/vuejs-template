<template>
  <div class="init-data-page">
    <div>
      <div class="m-content">
        <display-data
          v-if="initDataRows"
          :header="`INIT DATA`"
          :rows="initDataRows"
        ></display-data>
        <display-data
          v-if="userRows"
          :header="`USER`"
          :rows="userRows"
        ></display-data>
        <display-data
          v-if="receiverRows"
          :header="`Receiver`"
          :rows="receiverRows"
        ></display-data>
        <display-data
          v-if="chatRows"
          :header="`Chat`"
          :rows="chatRows"
        ></display-data>
      </div>
    </div>
  </div>
</template>
      
      <script lang="ts">
import { onMounted, ref } from "vue";
import Link from "../components/Link.vue";
import Cell from "../components/Cell.vue";
import { TonConnectButton } from "@townsquarelabs/ui-vue";
// import { useUtils } from "@tma.js/sdk-vue";
import DisplayData, { DisplayDataRow } from "../components/DisplayData.vue";
import { User, useInitData, useLaunchParams } from "@tma.js/sdk-vue";

export default {
  name: "InitDataPage",
  components: { Link, Cell, TonConnectButton, DisplayData },
  setup() {
    const initDataRaw = useLaunchParams(true);
    const initData = useInitData();
    const initDataRows = ref<DisplayDataRow[]>();
    const userRows = ref<DisplayDataRow[]>();
    const receiverRows = ref<DisplayDataRow[]>();
    const chatRows = ref<DisplayDataRow[]>();

    // console.log("initDataRaw", initDataRaw);
    // console.log("initData", initData);

    function getInitDataRows(): DisplayDataRow[] {
      const {
        hash,
        queryId,
        chatType,
        chatInstance,
        authDate,
        startParam,
        canSendAfter,
        canSendAfterDate,
      } = initData!;
      return [
        { title: "raw", value: initDataRaw?.initDataRaw },
        { title: "auth_date", value: authDate.toLocaleString() },
        {
          title: "auth_date (raw)",
          value: (authDate.getTime() / 1000).toString(),
        },
        { title: "hash", value: hash },
        { title: "can_send_after", value: canSendAfterDate?.toISOString() },
        { title: "can_send_after (raw)", value: canSendAfter },
        { title: "query_id", value: queryId },
        { title: "start_param", value: startParam },
        { title: "chat_type", value: chatType },
        { title: "chat_instance", value: chatInstance },
      ];
    }
    function getUserRows(user: User): DisplayDataRow[] {
      // console.log(user);
      return [
        { title: "id", value: user.id.toString() },
        { title: "username", value: user.username },
        { title: "photo_url", value: user.photoUrl },
        { title: "last_name", value: user.lastName },
        { title: "first_name", value: user.firstName },
        { title: "is_bot", value: user.isBot },
        { title: "is_premium", value: user.isPremium },
        { title: "language_code", value: user.languageCode },
        { title: "allows_to_write_to_pm", value: user.allowsWriteToPm },
        {
          title: "added_to_attachment_menu",
          value: user.addedToAttachmentMenu,
        },
      ];
    }

    onMounted(() => {
      if (initData && initData) {
        initDataRows.value = getInitDataRows();
      }
      if (initData && initData.user) {
        userRows.value = getUserRows(initData.user);
      }
      if (initData && initData.receiver) {
        receiverRows.value = getUserRows(initData.receiver);
      }
      if (!initData?.chat) {
        return;
      }
      const { id, title, type, username, photoUrl } = initData.chat;
      chatRows.value = [
        { title: "id", value: id.toString() },
        { title: "title", value: title },
        { title: "type", value: type },
        { title: "username", value: username },
        { title: "photo_url", value: photoUrl },
      ];
    });
    return { initDataRows, userRows, receiverRows, chatRows };
  },
};
</script>
      
      <style scoped lang="scss">
.init-data-page {
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
    margin-bottom: 40px;
    // padding: 20px 0;
  }
  text-align: left;
}
</style>
      