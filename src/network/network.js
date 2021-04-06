import orginAxios from 'axios'

export function request(config) {
    const instance = orginAxios.create({
        baseURL: 'http://rap2api.taobao.org/app/mock/278219/',
        timeout: 5000,
        headers: {

        }
    })
    instance.interceptors.request.use(config => {
        // 1, 发生请求界面动画效果
        // 2，对请求的数据做序列化操作
        // 3，某些页面需要登陆才能看到，所以需要根据token判断是否可以访问页面
        console.log('welcome to request')
        return config
    }, error => {
        // 请求延时，比如客户端网络问题，则跳到指定页面
        console.log('error')
    })

    instance.interceptors.response.use(response => {
        // 1,主要是对数据进行过滤
        console.log('response filter data')
        return response.data
    }, error => {
        console.log('resoonse fultale')
    })

    return instance(config)
}