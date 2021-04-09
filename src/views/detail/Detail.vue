<template>
  <div id="app">
    <DetailTarbar class='detailbar'></DetailTarbar>
    <scroll class='scrollarea' ref='scroll'>
      <detail-swiper :swiper='swiper'></detail-swiper>
      <detail-info :detailinfo='goods'></detail-info>
      <shop :bannar='bannar'></shop>
      <new-detail :newstyle='newstyle' @loadimg='loadmore'></new-detail>
      <item-param :info='infodetail'></item-param>
      <comment :comment='commentdetail' @loaddetailimg='loadmore'></comment>
    </scroll>
  </div>
</template>

<script type="text/javascript">
import DetailTarbar from './ChildrenDetail/DetailTarbar'
import DetailSwiper from './ChildrenDetail/Swiper'
import DetailInfo from './ChildrenDetail/DetailInfo'
import Shop from './ChildrenDetail/Shop'
import NewDetail from './ChildrenDetail/NewDetail'
import ItemParam from './ChildrenDetail/ItemParam'
import Scroll from 'components/common/scroll/Scroll'
import Comment from './ChildrenDetail/Comment'

import {getSwiper, Goods, Bannar, NewStyle, getInfo, InfoDetail, CommentDetail} from '@/network/detail'

export default {
  name: "detail",
  data() {
    return {
      id: 0,
      swiper: null,
      goods: {},
      sendtype: null,
      bannar: {},
      newstyle: {},
      infodetail: {},
      commentdetail: {}
    }
  },
  components: {
    DetailTarbar,
    DetailSwiper,
    DetailInfo,
    Shop,
    NewDetail,
    Scroll,
    ItemParam,
    Comment
  },
  created() {
    this.id = this.$route.params.id
    this.getSwiperData(this.id)
    this.getInfoDetail(this.id)
  },
  methods: {
    getSwiperData(id){
      getSwiper(id).then(ret => {
        this.swiper = ret.data.swiper
        this.sendtype = ret.data.sendtype.split('，')
        this.goods = new Goods(ret.data.title, ret.data.price, ret.data.sellinfo, ret.data.methods, this.sendtype)
        this.bannar = new Bannar(ret.data.bannar.logo, ret.data.bannar.totalsell, ret.data.bannar.totalgoods, ret.data.bannar.comment)
        this.newstyle = new NewStyle(ret.data.detailimg)
        console.log(this.newstyle)
     })
    },
    loadmore() {
      this.$refs.scroll.refresh()
      
    },
    getInfoDetail(id){
      getInfo(id).then(ret => {
        this.infodetail = new InfoDetail(ret.data.tables, ret.data.itemparams)
        this.commentdetail = new CommentDetail(ret.data.rate)
        console.log(this.commentdetail)
      })
    }
  }
}
</script>

<style scoped>
  .detailbar {
    position: relative;
    z-index: 20;
  }
  .scrollarea {
    position: absolute;
    top: 44px;
    bottom: 0px;
    z-index: 19;
    background-color: white;
  }
</style>
