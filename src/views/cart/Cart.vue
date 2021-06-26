<template>
  <div id="app">
    <nav-bar><div slot='center'>购物车  ({{$store.state.goodsdetail.length}})</div></nav-bar>
    <scroll class='scroll' ref='scroll'>
      <car-list></car-list>
    </scroll>
    <total></total>
    
  </div>
</template>

<script type="text/javascript">
import NavBar from 'components/common/navbar/NavBar'
import CarList from './Children/CarList'
import Scroll from 'components/common/scroll/Scroll'
import Total from './Children/Total'
export default {
  name: "cart",
  data() {
    return {

    }
  },
  components: {
    NavBar,
    CarList,
    Scroll,
    Total
  },
  mounted(){
    
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 91px;
    overflow: hidden;
    width: 100%
  }
</style>
