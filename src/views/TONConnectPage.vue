<template>
  <div class="connect-page">
    <template v-if="wallet">
      <div>
        <div class="top-card-wrapper">
          <Cell
            @click="openLink"
            style="border-radius: 12px"
            :title="`Wallet`"
            :subtitle="wallet.appName"
          >
            <template v-slot:before>
              <img class="m-avatar" :src="wallet.imageUrl" />
            </template>
          </Cell>
        </div>

        <TonConnectButton
          :className="`ton-connect-page__button`"
          :styles="{ float: 'right' }"
        ></TonConnectButton>
      </div>
      <div style="margin-top: 80px">
        <display-data :header="`Account`" :rows="accountRow"></display-data>
        <display-data :header="`Device`" :rows="deviceRow"></display-data>

        <h5 style="opacity: 0">
          These pages help developer to learn more about current launch
          information
        </h5>
      </div>
    </template>
    <template v-else>
      <div class="empty-wrapper">
        <h3>TON Connect</h3>
        <h5>
          To display the data related to the TON Connect, it is required to
          connect your wallet
        </h5>
        <TonConnectButton
          :className="`ton-connect-page__button`"
          :styles="{ margin: `0 auto` }"
        ></TonConnectButton>
      </div>
    </template>
  </div>
</template>
  
  <script lang="ts">
import { onMounted, ref, watch } from "vue";
import Link from "../components/Link.vue";
import Cell from "../components/Cell.vue";
import { TonConnectButton, useTonWallet } from "@townsquarelabs/ui-vue";
import { useUtils } from "@tma.js/sdk-vue";
import DisplayData, { DisplayDataRow } from "../components/DisplayData.vue";

export default {
  name: "TONConnectPage",
  components: { Link, Cell, TonConnectButton, DisplayData },
  setup() {
    const wallet = useTonWallet() as any;
    const utils = useUtils();

    const accountRow = ref<Array<DisplayDataRow>>();
    const deviceRow = ref<Array<DisplayDataRow>>();
    watch(wallet, () => {
      if (wallet) {
        const {
          account: { chain, publicKey, address },
          device: { appName, appVersion, maxProtocolVersion, platform , features},
        } = wallet.value;

        accountRow.value = [
          { title: "Address ", value: address },
          { title: "Chain ", value: chain },
          { title: "Public Key ", value: publicKey },
        ];
        deviceRow.value = [
          { title: "App Name", value: appName },
          { title: "App Version", value: appVersion },
          {
            title: "Max Protocol Version",
            value: maxProtocolVersion.toString(),
          },
          { title: "Platform", value: platform},
          {
            title: 'Features',
            value: features
              .map((f: { name: string; }) => typeof f === 'object' ? f.name : undefined)
              .filter((v: any) => v)
              .join(', '),
          },
        ];
      } else {
        console.log("-----wallet empty", wallet);
      }
    });

    function openLink(e: MouseEvent) {
      e.preventDefault();
      utils.openLink(wallet.value.aboutUrl);
    }

    onMounted(() => {});
    return { wallet, accountRow, deviceRow, openLink };
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

  .top-card-wrapper {
    margin: 10px 0;
    padding: 20px 0;
    .m-avatar {
      width: 40px;
      height: 40px;
      border-radius: 30px;
    }
  }
  text-align: left;
  .empty-wrapper {
    text-align: center;
    margin-top: 50%;
    h5 {
      color: #a19d9d;
    }
  }
}
</style>
  