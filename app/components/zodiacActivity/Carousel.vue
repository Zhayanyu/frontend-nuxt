<template>
  <swiper
      :loop="false"
      :centeredSlides="true"
      :slide-to-clicked-slide="true"
      :slidesPerView="2.2"
      :initialSlide="props.currentIndex"
      @slide-change-transition-end="onSlideChange"
      class="mySwiper"
  >
    <swiper-slide v-for="(imageItem, i) in props.data" :index="i" :key="i">
      <div @click="onClickItem(i)" class="image-view">
        <van-image
            class="image"
            fit="cover"
            :src="imageItem.image"></van-image>
        <div v-if="levelIndex !== i && levelIndex < 12" class="mask-view">
          <van-image
              v-if="levelIndex > i"
              class="image-ordered"
              fit="cover"
              :src="imageOrdered"
          ></van-image>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import imageOrdered from "~/assets/zodiacActivity/ordered.png";

const emits = defineEmits(['update:currentIndex', 'onClickButton', 'onClickSucceeded']);

interface Props {
  data?: any;
  currentIndex?: any;
  levelIndex?: any,
}

const props = withDefaults(defineProps<Props>(), {
  currentIndex: 0,
  levelIndex: 0,
  data: [{}]
});


const onClickItem = (index:any)=>{
  // console.log(index,carouselRef.value.next);
  // carouselRef.value.slideTo(index,true);
}


const onSlideChange = (swiper: any) => {
  console.log('Slide changed to: ', swiper.activeIndex);
  emits('update:currentIndex', swiper.activeIndex);
};
onMounted(() => {
  console.log('props.currentIndex:',props.currentIndex);
});

</script>

<style scoped>
.mySwiper {
  height: 2.2rem;
  width: 3.75rem;
  perspective: 2000px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide-active, .swiper-slide-duplicate-active {
  transform: scale(1);
}

.image-view {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;

  .mask-view {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #FFFFFF55;

    .image-ordered {
      width: 50%;
    }
  }
}

.carousel-3d-slide {
  background: transparent;
  border: none;
}

.image {
  width: 100%;
  height: 100%;
}
</style>
