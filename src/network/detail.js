import {request} from './network'

export function getSwiper(id) {
  return request({
    url: '/detail',
    params: {
      id: id
    }
  })
}

export class Goods {
  constructor(title, price, sellinfo, methods, sendtype) {
    this.title = title,
    this.price = price,
    this.sellinfo = sellinfo[0],
    this.methods = methods,
    this.sendtype = sendtype
  }
}

export class Bannar {
  constructor(logo, totalsell, totalgoods, comment) {
    this.logo = logo,
    this.totalsell = totalsell,
    this.totalgoods = totalgoods,
    this.comment = comment
  }
}