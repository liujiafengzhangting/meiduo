<template>
  <div id="app">
    <DetailTarbar class='detailbar' @toPosition='toPosition' :positionId='positionId'></DetailTarbar>
    <scroll class='scrollarea' ref='scrolldetail' @pullUpload='pullUpload' @scroll='scroll'>
      <detail-swiper :swiper='swiper' ref='swiper'></detail-swiper>
      <detail-info :detailinfo='goods'></detail-info>
      <shop :bannar='bannar'></shop>
      <new-detail :newstyle='newstyle' @loadimg='loadmore'></new-detail>
      <item-param :info='infodetail' ref='params'></item-param>
      <comment :comment='commentdetail' @loaddetailimg='loadmore' ref='comment'></comment>
      <good-list :goodslist='subcommentdetail' class='goodlist' ref='goodlist'></good-list>
    </scroll>
    <nav-bar-detail></nav-bar-detail>
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
import GoodList from 'components/content/GoodsList/GoodList'
import NavBarDetail from './ChildrenDetail/NavBarDetail'

import {getSwiper, Goods, Bannar, NewStyle, getInfo, InfoDetail, CommentDetail, getComment, SubCommentDetail} from '@/network/detail'

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
      commentdetail: {},
      subcommentdetail: [],
      isEnd: false,
      shopOffset: null,
      paramOffset: null,
      commentOffset: null,
      goodlistOffset: null,
      positionId: 0
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
    Comment,
    GoodList,
    NavBarDetail
  },
  created() {
    this.id = this.$route.params.id
    this.getSwiperData(this.id)
    this.getInfoDetail(this.id)
    this.getCommentDetail(this.id)
  },
  methods: {
    getSwiperData(id){
      getSwiper(id).then(ret => {
        this.swiper = ret.data.swiper
        this.sendtype = ret.data.sendtype.split('，')
        this.goods = new Goods(ret.data.title, ret.data.price, ret.data.sellinfo, ret.data.methods, this.sendtype)
        this.bannar = new Bannar(ret.data.bannar.logo, ret.data.bannar.totalsell, ret.data.bannar.totalgoods, ret.data.bannar.comment)
        this.newstyle = new NewStyle(ret.data.detailimg)
     })
    },
    loadmore() {
      this.$refs.scrolldetail && this.$refs.scrolldetail.refresh()
      this.getOffset()
    },
    getInfoDetail(id) {
      getInfo(id).then(ret => {
        this.infodetail = new InfoDetail(ret.data.tables, ret.data.itemparams)
        this.commentdetail = new CommentDetail(ret.data.rate)
      })
    },
    getCommentDetail(id) {
      getComment(id).then(ret => {
        this.subcommentdetail.push(...ret.data.list)
        this.isEnd = ret.data.isEnd
        this.$refs.scrolldetail.scroll.finishPullUp()
        console.log(ret.data)
      })
    },
    pullUpload() {
      if (this.isEnd) {
        
      } else {
        this.getCommentDetail(this.id)
      }
    },
    getOffset() {
      this.shopOffset = -this.$refs.swiper.$el.offsetTop
      this.paramOffset = -this.$refs.params.$el.offsetTop
      this.commentOffset = -this.$refs.comment.$el.offsetTop
      this.goodlistOffset = -this.$refs.goodlist.$el.offsetTop
    },
    toPosition(id) {
      switch(id){
        case 0:
          this.$refs.scrolldetail.scroll.scrollTo(0, this.shopOffset, 1000)
          break
        case 1:
          this.$refs.scrolldetail.scroll.scrollTo(0, this.paramOffset, 1000)
          break
        case 2:
          this.$refs.scrolldetail.scroll.scrollTo(0, this.commentOffset, 1000)
          break
        case 3:
          this.$refs.scrolldetail.scroll.scrollTo(0, this.goodlistOffset, 1000)
          break
      }
    },
    scroll(position) {
      if(position.y <= this.goodlistOffset) {
        this.positionId = 3
      }else if(position.y <= this.commentOffset) {
        this.positionId = 2
      }else if(position.y <= this.paramOffset) {
        this.positionId = 1
      }else if(position.y <= this.shopOffset) {
        this.positionId = 0
      }
    }
  },
  mounted() {
    this.$bus.$on('loadImg', () => {
      this.$refs.scrolldetail && this.$refs.scrolldetail.refresh()
    })
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
    bottom: 44px;
    z-index: 19;
    background-color: white;
  }
  .goodlist {
    border-top: 3px solid #ccc;
    padding-top: 20px;
  }
</style>
