export default function(ctx: any) {
  // 正常请求返回处理
  const $axios = ctx.$axios
  $axios.onRequest((config: any) => {
    console.log(config)
    config.headers.common.Authorization = `bearer token-------$`
    return config
  })
  $axios.onResponse((response: any) => {
    return response
  })
  // 错误请求返回处理
  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status)
    console.log('error', code)
    // location.href = '/login'
  })
}
