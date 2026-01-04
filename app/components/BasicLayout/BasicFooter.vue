<script setup lang="ts" name="BaseFooter">
import {
  computed,
} from 'vue';
import {useRoute, useRouter} from "vue-router";
const router = useRouter();
const route = useRoute();
import PlaceOrderButton from "~/components/common/PlaceOrderButton.vue";

const showFooter = computed(() => {
  return route.meta.showFooter || false
});

const footerFollowBrightness = computed(() => {
  return route.meta.footerFollowBrightness || false
});

</script>

<template>
  <div v-if="showFooter">
    <PlaceOrderButton :class="footerFollowBrightness?'place-order-view-brightness':''"></PlaceOrderButton>
  </div>
</template>

<style lang="less">

.place-order-view-brightness{
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--nr-background-b-color) 100%);
}

</style>
