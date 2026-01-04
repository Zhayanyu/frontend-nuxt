
// 定义 Window 接口扩展，以支持 Flutter 注入的对象
declare global {
  interface Window {
    // 通用 Flutter Channel (webview_flutter)
    FlutterChannel?: {
      postMessage: (message: string) => void
    }
    // InAppWebView Channel
    flutter_inappwebview?: {
      callHandler: (handlerName: string, ...args: any[]) => Promise<any>
    }
    // 也可以是其他自定义名称，这里预留扩展
    [key: string]: any
  }
}

export const useFlutter = () => {
  const receivedMessage = ref<string>('')

  // 发送消息给 Flutter
  const sendMessageToFlutter = (handlerName: string, data: any) => {
    if (import.meta.client) {
      try {
        // 优先尝试 flutter_inappwebview 方式 (支持返回值)
        if (window.flutter) {
          window.flutter.postMessage(JSON.stringify({'event': 'router','meta': {
              'path': 'recharge_page',
            },}))
          return Promise.resolve()
        }
        // 其次尝试标准 FlutterChannel (无返回值)
        else if (window.FlutterChannel) {
          console.log(`Sending to Flutter via FlutterChannel`, data)
          window.FlutterChannel.postMessage(JSON.stringify({ handler: handlerName, data }))
          return Promise.resolve()
        } else {
          console.warn('Flutter environment not detected')
          return Promise.reject('Flutter environment not detected')
        }
      } catch (e) {
        console.error('Error sending message to Flutter:', e)
        return Promise.reject(e)
      }
    }
    return Promise.resolve()
  }

  // 注册供 Flutter 调用的全局方法
  const registerFlutterCallback = (name: string, callback: (...args: any[]) => void) => {
    if (import.meta.client) {
      window[name] = (...args: any[]) => {
        console.log(`Received call from Flutter: ${name}`, args)
        // 更新响应式数据，方便 UI 展示
        if (args.length > 0) {
            receivedMessage.value = JSON.stringify(args)
        }
        callback(...args)
      }
    }
  }

  // 清理回调
  const unregisterFlutterCallback = (name: string) => {
    if (import.meta.client) {
      delete window[name]
    }
  }

  return {
    sendMessageToFlutter,
    registerFlutterCallback,
    unregisterFlutterCallback,
    receivedMessage
  }
}
