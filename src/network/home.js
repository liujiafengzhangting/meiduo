import {request} from './network'

export function mutildata() {
    return request({
        url: '/lunbotu',
    })
}

export function recomendData() {
    return request({
        url: '/tuijian'
    })
}

export function getGoodsList(type, page) {
    return request({
        url: '/goodslist',
        params: {
            type,
            page
        }
    })
}