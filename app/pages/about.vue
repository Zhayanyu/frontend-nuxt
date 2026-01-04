<template>
  <div class="page-container">
    <van-nav-bar title="About Page" />

    <div class="content-padding">
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" class="mb-4">
        About info
      </van-notice-bar>

      <van-card>
        <template #title>
          <div class="card-header">
            <span>Flutter Interaction</span>
          </div>
        </template>
        
        <template #desc>
          <div class="interaction-section">
            <h3>Send to Flutter</h3>
            <van-field v-model="messageToSend" placeholder="Type message to Flutter" class="mb-2 input-border" />
            <div class="button-group">
              <van-button type="primary" @click="sendToFlutter" size="small">Send Message</van-button>
              <van-button type="success" @click="callFlutterAction" size="small">Call Action</van-button>
            </div>
          </div>

          <van-divider />

          <div class="interaction-section">
            <h3>Received from Flutter</h3>
            <van-notice-bar 
              v-if="receivedMessage" 
              color="#1989fa" 
              background="#ecf9ff" 
              left-icon="info-o"
              wrapable
            >
              {{ receivedMessage }}
            </van-notice-bar>
            <van-empty v-else description="No message received yet" image-size="60" />
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { sendMessageToFlutter, registerFlutterCallback, unregisterFlutterCallback, receivedMessage } = useFlutter()

const messageToSend = ref('')

const sendToFlutter = () => {
  if (!messageToSend.value) {
    showToast('Please enter a message')
    return
  }
  sendMessageToFlutter('onMessage', { text: messageToSend.value })
    .then(() => showSuccessToast('Sent to Flutter'))
    .catch(() => showFailToast('Failed to send (Flutter context not found?)'))
}

const callFlutterAction = () => {
  sendMessageToFlutter('onAction', { action: 'doSomething', timestamp: Date.now() })
    .then(res => {
      showSuccessToast('Action called')
      if (res) {
        console.log('Result from Flutter:', res)
      }
    })
    .catch(() => showFailToast('Failed to call action'))
}

// 注册一个回调供 Flutter 调用
// Flutter 端可以通过 webViewController.evaluateJavascript("window.onFlutterData('some data')") 调用
onMounted(() => {
  registerFlutterCallback('onFlutterData', (data: any) => {
    showToast(`Received data from Flutter: ${JSON.stringify(data)}`)
  })
})

onUnmounted(() => {
  unregisterFlutterCallback('onFlutterData')
})
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
.mb-2 {
  margin-bottom: 0.5rem;
}
.interaction-section {
  padding: 10px 0;
}
.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.input-border {
  border: 1px solid #ebedf0;
  border-radius: 4px;
  padding: 8px;
}
.card-header {
  font-weight: bold;
  font-size: 16px;
}
</style>
