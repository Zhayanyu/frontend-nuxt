<script setup lang="ts">
import BasicHeader from '~/components/BasicLayout/BasicHeader.vue';
import BasicFooter from "~/components/BasicLayout/BasicFooter.vue";
import {useLayoutStore} from "~/stores/layout";
import {storeToRefs} from "pinia";
const layoutStore = useLayoutStore();
const { isDark } = storeToRefs(layoutStore);
</script>

<template>
  <div id="basic-layout" class="basic-layout">
    <van-config-provider :theme="isDark?'dark':'light'"></van-config-provider>
    <client-only>
      <BasicHeader />
      <BasicFooter />
      <slot />
    </client-only>
  </div>
</template>

<style>
.basic-layout {
  /*display: grid;*/
  /*position: relative;*/
  height: 100VH;
  width: 100VW;
}

.basic-body{
}

</style>
