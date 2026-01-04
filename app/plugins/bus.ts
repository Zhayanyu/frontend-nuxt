import mitt from 'mitt'
import type { Emitter } from 'mitt'

type Events = Record<string, any>

export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt<Events>()

  // 1. 挂载到 globalProperties 以支持 user 的现有写法 (Bus)
  // @ts-ignore
  nuxtApp.vueApp.config.globalProperties.Bus = emitter

  return {
    provide: {
      // 2. 推荐方式：提供 $Bus，可以通过 useNuxtApp().$Bus 访问
      Bus: emitter
    }
  }
})

declare module '#app' {
  interface NuxtApp {
    $Bus: Emitter<Events>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $Bus: Emitter<Events>
    Bus: Emitter<Events>
  }
}
