<template>
  <div class='home'>
      <navbar class='navbar'>
        <slot slot='center'>首页</slot>
      </navbar>
      <sub-title :title='title' class='sub-title1' @subclick='getCurrentType' v-show='isShowSubTitle' ref='subtitle1'></sub-title>
      <scroll class='content' ref='scroll' @scroll='scroll' @pullUpload='pullUpload'>
        <home-swiper :barnarLink='barnarLink' class='swiper-item' @loadswiper='loadswiper'></home-swiper>
        <recomend :recomend='recomend'></recomend>
        <feature></feature>
        <sub-title :title='title' class='sub-title2' @subclick='getCurrentType' ref='subtitle2'></sub-title>
        <goodlist :goodslist='goodslist[currentType]'></goodlist>
        
      </scroll>
      <totop @click.native='toTop' v-show='isShowToTop'></totop>
  
  </div>
</template>

<script type="text/javascript">
import navbar from 'components/common/navbar/NavBar'
import scroll from 'components/common/scroll/Scroll'
import HomeSwiper from 'views/home/ChildrenHome/HomeSwiper'
import recomend from 'views/home/ChildrenHome/recoment'
import feature from 'views/home/ChildrenHome/Feature'

import SubTitle from 'components/content/SubTitle/SubTitle'
import goodlist from 'components/content/GoodsList/GoodList'
import totop from 'components/content/totop/ToTop'

import {mutildata} from 'network/home'
import { recomendData, getGoodsList } from 'network/home'
export default {
  name: "app",
  data() {
    return {
      barnarLink: null,
      barnarImg: null,
      recomend: null,
      title: ['流行', '精选', '爆款'],
      goodslist: {
        'pop': [],
        'new': [],
        'sell': []
      },
      currentType: 'pop',
      isShowToTop: false,
      page: 1,
      offsetTop: 0,
      isShowSubTitle: false,
      currentPosition: 0,
      isLoadSwiper: true
    }
  },
  components: {
    navbar,
    HomeSwiper,
    recomend,
    feature,
    SubTitle,
    goodlist,
    scroll,
    totop
  },
  created() {
    mutildata().then(ret => {
      this.barnarLink = ret.data.bannarlink;
      this.barnarImg = ret.data.bannarimg;
      
    }),
    recomendData().then(ret => {
      this.recomend = ret.data.recomend
    }),
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  
  
  methods: {
    getGoods(type) {
      getGoodsList(type, this.page).then(ret => {
        this.goodslist[type].push(...ret.data.goods)
        this.page ++
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    getCurrentType(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.subtitle1.currentIndex = index
      this.$refs.subtitle2.currentIndex = index
    },
    toTop() {
      // this.$refs.scroll.scrollTo(0, 0)
      this.$refs.scroll.scroll.scrollTo(0, 0, 100)
    },
    scroll(position) {
      this.isShowToTop = (-position.y) > 800,
      this.isShowSubTitle = (-position.y) > this.offsetTop
    },
    pullUpload() {
      this.getGoods(this.currentType)
      
    },
    debounce(func, wait) {
      let timer = null;
      return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, wait)
      }
    },
    loadswiper() {
      if(this.isLoadSwiper){
        this.offsetTop = this.$refs.subtitle2.$el.offsetTop;
        this.isLoadSwiper = false
        }
      
    }
    
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 300)
    this.$bus.$on('loadImg', () => {
      refresh();
    })
    
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.currentPosition, 0)
  },
  deactivated() {
    this.currentPosition = this.$refs.scroll.scroll.y
  }

}
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  /* .swiper-item {
    padding-top: 44px;
  } */
  .sub-title1 {
    position: relative;
    top: 44px;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    
  }
</style>
