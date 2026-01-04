<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {onBeforeMount} from "vue";
import {flutterApi} from "./configs/data";
import {useUserStore} from "./stores/user";
import {useLayoutStore} from "~/stores/layout";

// Use NuxtApp to access the global event bus
const { $Bus } = useNuxtApp();
// Alias it to Bus for compatibility with existing code if needed, or just use $Bus
const Bus = $Bus;
const userStore = useUserStore();
const layoutStore = useLayoutStore();

declare global {
  interface Window {
    setFlutterData: any;
    setFlutterEvent: any;
    flutter: any;
  }
}

onBeforeMount(() => {
  //let _this = this
  window.setFlutterData = function (data:any) {
    try {
      let json = JSON.parse(data.replace(/\n/g, "\\n").replace(/\r/g, "\\r"));

      if (json['path'] === flutterApi.talentInfo) {
        userStore.setTalentInfo(json);
      }
      if (json['path'] === flutterApi.expRecords) {
        userStore.setExpRecords(json);
      }
      if (json['path'] === flutterApi.levelInfo) {
        userStore.setLevelInfo(json);
        Bus.emit("levelInfo", json.data);
      }
      if (json['path'] === flutterApi.promoActivityRenderActivityData) {
        userStore.setActivityData(json);
        //兼容处理
        userStore.setLuckyTurntableActivityData(json);
      }
      if (json['path'] === flutterApi.promoActivityRenderPhaseNext) {
        Bus.emit("renderPhaseNext", json);
      }
      if (json['path'] === flutterApi.promoActivityConvertActivityProps) {
        Bus.emit("convertActivityProps", json);
      }
      if (json['path'] === flutterApi.promoActivityMineGold) {
        Bus.emit("mineGold", json);
      }
      if (json['path'] === flutterApi.bindCardPage) {
        Bus.emit("bindCardPage", json);
      }
      if (json['path'] === flutterApi.configOccupationsQuery) {
        Bus.emit("configOccupationsQuery", json);
      }
      if (json['path'] === flutterApi.fundPayOauthSignApply) {
        Bus.emit("fundPayOauthSignApply", json);
      }
      if (json['path'] === flutterApi.fundPayOauthSignConfirm) {
        Bus.emit("fundPayOauthSignConfirm", json);
      }
      if (json['path'] === flutterApi.fundPayOauthBankList) {
        Bus.emit("fundPayOauthBankList", json);
      }
      if (json['path'] === flutterApi.fundPayCebbankCebPayInInfo) {
        Bus.emit("fundPayCebbankCebPayInInfo", json);
      }

      if (json['event'] === 'setStatusBarHeight') {
        // showToast(json['event']);
        userStore.setStatusBarHeight(json['data']);
        layoutStore.setStatusBarHeight(json['data']);
      }
      if (json['event'] === 'setLayout') {
        layoutStore.setLayout(json['data']);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  window.setFlutterEvent = function (data:any): void {
    try {
      let json = JSON.parse(data.replace(/\n/g, "\\n").replace(/\r/g, "\\r"));
      if (json['event'] === 'webPageReturn') {
        // _this.$bus.$emit("webPageReturn", '');
      }
      //todo 兼容老版本
      if (json['event'] === 'setStatusBarHeight') {
        userStore.setStatusBarHeight(json['data']);
        layoutStore.setStatusBarHeight(json['data']);
      }
      if (json['event'] === 'setLayout') {
        layoutStore.setLayout(json['data']);
      }
    } catch (e) {
      console.log(e);
    }
  }

  if ((window as any).flutter) {
    (window as any).flutter.postMessage(JSON.stringify({'action': 'initLayout'}))
  }
});
</script>
