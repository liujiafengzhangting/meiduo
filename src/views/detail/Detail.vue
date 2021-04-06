<template>
  <div id="app">
    <DetailTarbar></DetailTarbar>
    <detail-swiper :swiper='swiper'></detail-swiper>
    <detail-info :detailinfo='goods'></detail-info>
    <shop :bannar='bannar'></shop>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import DetailTarbar from './ChildrenDetail/DetailTarbar'
import DetailSwiper from './ChildrenDetail/Swiper'
import DetailInfo from './ChildrenDetail/DetailInfo'
import Shop from './ChildrenDetail/Shop'

import {getSwiper, Goods, Bannar} from '@/network/detail'

export default {
  name: "detail",
  data() {
    return {
      id: 0,
      swiper: null,
      goods: {},
      sendtype: null,
      bannar: {}
    }
  },
  components: {
    DetailTarbar,
    DetailSwiper,
    DetailInfo,
    Shop
  },
  created() {
    this.id = this.$route.params.id
    this.getSwiperData(this.id)
  },
  methods: {
    getSwiperData(id){
      getSwiper(id).then(ret => {
        this.swiper = ret.data.swiper
        this.sendtype = ret.data.sendtype.split('，')
        this.goods = new Goods(ret.data.title, ret.data.price, ret.data.sellinfo, ret.data.methods, this.sendtype)
        this.bannar = new Bannar(ret.data.bannar.logo, ret.data.bannar.totalsell, ret.data.bannar.totalgoods, ret.data.bannar.comment)
        console.log(this.bannar)
     })
    }
  }
}
</script>

<style scoped>
</style>
