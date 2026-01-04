<script setup lang="ts" name="BaseHeader">
import {
  onBeforeMount,
  onMounted,
  reactive,
  computed,
  watch,
} from 'vue';
import type { CSSProperties } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import NrImage from "~/components/common/NrImage.vue";
import {useLayoutStore} from "~/stores/layout";
import {storeToRefs} from "pinia";

const state: any = reactive({
  navIndex: 'Home',
  //noTop: false,
  currentURL: '',
  whiteHeader: false,
  backgroundTransparent: false
});
const router = useRouter();
const route = useRoute();
state.navIndex = route.name;

const layoutStore = useLayoutStore();
const { statusBarHeight,noTop } = storeToRefs(layoutStore);

const customHeader = ['/orderRules','/newbieGuide'];
const blackRoute = ['/about','/orderStrategy','/orderRules','/newbieGuide','/orderRulesDetail','/userGuide','/vipLevel','/vipLevel-20240228','/vipEquity','/vipExpRecords','/luckyTurntableActivity'];

const headerStyle = computed<CSSProperties>(() => {

  if (customHeader.includes(state.currentURL)){
    return (route.meta.headerStyle as CSSProperties) || {};
  }

  if(noTop.value || state.whiteHeader){
    return  {}
  }
  return (route.meta.headerStyle as CSSProperties) || {};
});

const itemStyle = computed<CSSProperties>(() => {
  return {
    'padding-top':statusBarHeight.value+'px',
    //'height': `${statusBarHeight.value + 48}px`,
  };
});


const currentTitle = computed(() => {
  return route.query.title || route.meta.title ||'';
});

const showHeader = computed(() => {
  if(route.meta.showHeader == false){
    return  false
  }
  return  true;
});

const getCurrentURL = ()=>{
  return route.path;
}

onBeforeMount(() => {
  watch(
    () => route.name,
    (count) => {
      state.currentURL = getCurrentURL();
      if( route.meta.headerType == 'arrow'){
        state.whiteHeader = false;
      }else if (!blackRoute.includes(state.currentURL)) {
        state.whiteHeader = false;
      } else {
        state.whiteHeader = true;
      }

    },
      { immediate: true },
  );
});


onMounted(() => {
  var element = document.getElementById('app');
  if (element) {
    element.addEventListener('scroll', () => {
        if( route.meta.headerType == 'arrow'){
        noTop.value = false;
        }else if (element!.scrollTop > 0) {
        noTop.value = true;
        } else {
        noTop.value = false;
        }
    });
  }
})

state.currentURL = route.path;

if (!blackRoute.includes(state.currentURL)) {
  state.whiteHeader = true;
}


const onClickBack = () => {
  if((window as any).flutter){
    (window as any).flutter.postMessage(JSON.stringify({'action': 'back'}))
  }else {
    history.back()
  }
};

</script>

<template>
  <div v-if="showHeader" :style="headerStyle" :class="['basic-header',noTop || state.whiteHeader ? 'basic-header-notop' : '',!noTop&&state.backgroundTransparent?'basic-header-transparent' : '']">
    <div :style="itemStyle" class="basic-header-content">
      <NrImage v-if="route.meta.headerArrow && route.meta.headerArrow !== 'null'" class="arrow-image" :src="route.meta.headerArrow as string" @click="onClickBack"></NrImage>
      <van-icon v-else class="left-image" name="arrow-left"  @click="onClickBack"/>
<!--      <NrImage class="left-image" :src="leftImage"></NrImage>-->
      <div class="nav-title">{{ currentTitle }}</div>
      <div class="right-view"></div>
    </div>
  </div>
  <div v-else></div>
</template>

<style lang="less">
.basic-header {
  height: var(--nr-header-height);
  margin: 0;
  padding: 0;
  width: 100vw;
  z-index: 1000;
  position: absolute;
  top: 0vw;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.04);
  transition: 0.15s;

  .basic-header-content {
    width: 100VW;
    display: flex;
    z-index: 100;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: .12rem;
    padding-right: .12rem;

    .left-image{
      height: .32rem;
      width: .32rem;
      font-size: .24rem;
      line-height: .32rem;
    }

    .arrow-image{
      margin-left: .04rem;
      height: .36rem;
      width: .36rem;
    }

    .nav-title{
      height: .18rem;
      font-size: .18rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      line-height: .18rem;
    }

    .right-view{
      width: .32rem;
    }
  }

  .logo-view {
    height: 28px;
    margin-left: 18px;
    .logo-image {
      width: 84px;
      height: 28px;
    }
  }

  .ly-nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 44px;
    margin-right: auto;
    width: 100%;
    justify-content: center;
  }

  .ly-nav-box {
    font-weight: 400;
    font-size: 14px;
    line-height: 58px;
    height: 58px;
    padding: 0vw 27px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.15s;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);
      // opacity: 0.1;
      border-bottom: 2px solid #fff;
    }

    &.active {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);
      // opacity: 0.1;
      border-bottom: 2px solid #fff;
    }
  }

  .ly-btn-box {
    cursor: pointer;
    .contact-btn {
      width: 126px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #FFFFFF;
      border-radius: 08px;
      color: #1A46FD;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.15s;
    }
  }

  //.line {
  //  position: absolute;
  //  width: 100%;
  //  height: 1px;
  //  bottom: 0vw;
  //  left: 0vw;
  //  background-color: rgba(0, 0, 0, 0.1);
  //}
}

.drop-box-show {
  width: 100vw;
  margin-top: 60px;
  //transform: translateY(64px);
  height: 300px;
  background: #FFFFFF;
  box-shadow: 0px 30px 32px 0px rgba(0,0,0,0.06), inset 0px 1px 0px 0px #F0F0F0;
  transition: all 0.3s ease-in-out;
  z-index: 996;
  // opacity, transform;
  //transition: all 700ms;
  position: fixed;
  top: 0vw;
}

.basic-header-content {
  -webkit-text-size-adjust: none;
  font-weight: 500;
  box-sizing: border-box;
  flex-shrink: 0;
  align-content: flex-start;
  border: 0 solid var(--nr-title-color);
}

.basic-header-notop {
  color: var(--nr-title-color);
  background-color: var(--nr-background-b-color);
}

.basic-header-transparent{
  background: transparent;
}


.el-zoom-in-top-enter {
  opacity: 0;
  transform: scaleY(0.5)!important;
}

.svg{
  fill:currentColor;
  color:gray;
}

</style>
