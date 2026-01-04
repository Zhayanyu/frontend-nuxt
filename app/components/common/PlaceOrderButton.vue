<script setup lang="ts">
import {useLayoutStore} from "~/stores/layout";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import type {CSSProperties} from "vue";

const layoutStore = useLayoutStore();
const { statusBarHeight } = storeToRefs(layoutStore);
const paddingStyle = computed<CSSProperties>(() => {
  return {
    'padding-top':`${statusBarHeight.value + 48}px`,
  };
});

const onClickOrderButton = ()=>{
  if((window as any).flutter){
    (window as any).flutter.postMessage(JSON.stringify({'event': 'router','meta': {
        'path': 'trading_component',
      },}))
  }
}
</script>

<template>
  <div class="place-order-view">
    <van-button class="order-button" @click="onClickOrderButton">{{"去下单"}}</van-button>
  </div>
</template>

<style >
.place-order-view{
  background: white;
  position: fixed;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: .92rem;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%);
  padding-top: .07rem;
  padding-bottom: .2rem;
}
.order-button {
  width: 3.35rem;
  height: .56rem;
  background: var(--nr-primary-color);
  border-radius: .10rem;
  font-size: .15rem;
  border: none;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: .56rem;
}
</style>
