<template>
  <div class='maintabbar'>
    
    <tab-bar>
      <tab-bar-item path='/home' textColor='pink'>
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot='activeImg'>
        <img src="~assets/img/tabbar/home.svg" alt="" slot='disactiveImg'>
        <div slot='text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' textColor='pink'>
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot='activeImg'>
        <img src="~assets/img/tabbar/category.svg" alt="" slot='disactiveImg'>
        <div slot='text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart' textColor='pink'>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot='activeImg'>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot='disactiveImg'>
        <div slot='text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' textColor='pink'>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot='activeImg'>
        <img src="~assets/img/tabbar/profile.svg" alt="" slot='disactiveImg'>
        <div slot='text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script type="text/javascript">

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "app",
  data() {
    return {
      active: true
    }
  },
  components: {
      TabBar,
      TabBarItem
  },
  methods: {
    tbnactive() {
      console.log('active')
    }
  }
}
</script>

<style>
  
</style>
