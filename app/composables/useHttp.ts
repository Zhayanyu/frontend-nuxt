import type { UseFetchOptions } from 'nuxt/app'

const BASE_URL = 'https://jsonplaceholder.typicode.com/' // 示例 API 地址

export const useHttp = <T = any>(
  url: string,
  opts?: UseFetchOptions<T>,
) => {

  // 可以从环境变量获取 baseURL
  // const config = useRuntimeConfig()
  // const baseURL = config.public.apiBase || BASE_URL
  const baseURL = BASE_URL

  const options: UseFetchOptions<T> = {
    baseURL,
    // 请求拦截器
    onRequest({ options }) {
      // 获取 token
      const token = useCookie('token').value

      options.headers = options.headers || {}

      if (token) {
        if (Array.isArray(options.headers)) {
            options.headers.push(['Authorization', `Bearer ${token}`])
        } else if (options.headers instanceof Headers) {
            options.headers.set('Authorization', `Bearer ${token}`)
        } else {
            // @ts-ignore
            options.headers['Authorization'] = `Bearer ${token}`
        }
      }
    },
    // 响应拦截器
    onResponse({ response }) {
      if (response.status !== 200) {
        console.error('Request Error:', response)
      }
    },
    onResponseError({ response }) {
      console.error('Response Error:', response)
    },
    ...opts,
  }

  return useFetch<T>(url, options as any)
}
