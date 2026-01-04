<template>
  <div class="page-container">
   <div class="mt-2"> nuxtSSR测试</div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

// Pinia
const counter = useCounterStore()

// Network Request
const { data: posts, pending, error, execute } = await useHttp<any[]>('posts', {
  immediate: false, // 手动触发
  lazy: true
})

const fetchData = () => {
  execute()
}
</script>

<style scoped>
.page-container {
  padding-bottom: 50px; /* Space for TabBar */
}
.content-padding {
  padding: 16px;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-2 {
  margin-top: 1.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.gap-4 {
  gap: 1rem;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.card-header {
  font-weight: bold;
  font-size: 16px;
}
</style>
