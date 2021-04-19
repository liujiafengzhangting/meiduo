<template>
  <div>
    <detail-nav>
      <detail-nav-item slot='left'>
        <img src="~assets/img/detail/kefu.png" alt="" slot='img'>
        <div slot='text'><span>客服</span></div>
      </detail-nav-item>
      <detail-nav-item slot='left'>
        <img src="~assets/img/detail/shop.png" alt="" slot='img'>
        <div slot='text'><span>店铺</span></div>
      </detail-nav-item>
      <detail-nav-item slot='left'>
        <img src="~assets/img/detail/collect.png" alt="" slot='img'>
        <div slot='text'><span>收藏</span></div>
      </detail-nav-item>
      <div class='itemright' slot='right' id='cart'>
        <span>加入购物车</span>
      </div>
      <div class='itemright' slot='right' id='buy'>
        <span>购买</span>
      </div>
    </detail-nav>
  </div>
</template>

<script>
import DetailNav from 'components/content/DetailNav/DetailNav'
import DetailNavItem from 'components/content/DetailNav/DetailNavItem'

export default {
  data () {
    return {
    }
  },
  components: {
    DetailNav,
    DetailNavItem
  }
}
</script>

<style scoped>
  .itemright {
    flex: 1;
    text-align: center;
    line-height: 44px;
  }
  #cart {
    background-color: rgb(231, 231, 102);
  }
  #buy {
    background-color: rgb(209, 59, 84);
  }
</style>
