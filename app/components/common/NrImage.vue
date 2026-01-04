<script setup lang="ts" name="NrImage">
import { computed } from 'vue';
import {useLayoutStore} from "~/stores/layout";
import {storeToRefs} from "pinia";

// Hardcoded for now, or use runtimeConfig
const VITE_ASSETS_PATH = 'https://zsgmcdnapi.zs.sace.org.cn/zhangshanggongmei/resource/pics/assets';
const layoutStore = useLayoutStore();
const { isDark } = storeToRefs(layoutStore);

interface Props {
  src?: string;
  type?: string;
  fit?: any;
  position?:any
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  fit: 'fill',
  type: 'normal',
});

const imageSrc = computed<string>(() => {
  return handleImageSrc(props.src);
});

const handleImageSrc = (src: string)=>{
  let _src = src;
  if(_src && _src.startsWith('&assets/')){
    _src = _src.replace('&assets',VITE_ASSETS_PATH);
  }
  if(_src && _src.indexOf('&brightness/') > -1){
    _src = _src.replace('&brightness',isDark.value?'dark':'light');
  }
  return _src
};

</script>

<template>
  <van-image class="nr-image" :position="position" :src="imageSrc" :fit="fit" @dragstart.prevent>
    <template #loading>
      <div></div>
    </template>
    <template #error>
      <div></div>
    </template>
  </van-image>
</template>


<style lang="less" scoped>
.nr-image {
  --van-image-placeholder-background: transparent;
}
</style>
