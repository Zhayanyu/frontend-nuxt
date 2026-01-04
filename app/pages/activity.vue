<template>
  <div class="page-container">
    <van-nav-bar title="Home Page" />
    
    <div class="content-padding">
      <van-card class="mb-4">
        <template #title>
          <div class="card-header">
            <span>Pinia State Management</span>
          </div>
        </template>
        <template #desc>
          <div class="flex items-center gap-4 mt-2">
            <span>Count: {{ counter.count }}</span>
            <van-button @click="counter.increment" type="success" size="small" icon="plus" />
            <van-button @click="counter.decrement" type="warning" size="small" icon="minus" />
          </div>
        </template>
      </van-card>

      <van-card>
        <template #title>
          <div class="card-header">
            <span>Network Request (useHttp)</span>
          </div>
        </template>
        <template #desc>
          <div class="mt-2">
            <van-button @click="fetchData" type="primary" :loading="pending" block>Fetch Posts</van-button>
          </div>
          
          <div v-if="error" class="mt-2">
            <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
              Error: {{ error }}
            </van-notice-bar>
          </div>

          <div v-if="posts && posts.length" class="mt-2">
            <van-cell-group>
              <van-cell v-for="post in posts.slice(0, 5)" :key="post.id" :title="post.title" :label="`ID: ${post.id}`" />
            </van-cell-group>
          </div>
        </template>
      </van-card>
    </div>
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
  margin-top: 0.5rem;
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
