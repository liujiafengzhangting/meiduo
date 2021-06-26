<template>
  <div id="app">
    <div class='top'>
      <span class='left'>收入合计</span>
      <img src="~assets/img/detail/request.png" alt="">
      <span class='center'>:</span>
      <span class='right'>8999999元</span>
    </div>
      
    <div class='bottom'>
      <span class='left'>已申报税额合计:</span>
      <span class='right'>1314.04元</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
  .top {
    font-size: 15px;
    height: 45px;
    display: flex;
    border-bottom: 1px solid #e2e2e0;
    margin-left: 15px;
    margin-right: 22px;
  }
  .top img {
      width: 15px;
      height: 15px;
      padding: 17px 10px 10px 8px;
  }
  .top .left {
      padding: 15px 0px 10px 2px;
  }
  .top .center {
    padding-top: 15px;
  }
  .top .right {
    position: absolute;
    right: 25px;
    padding-top: 15px;
  }
  .bottom {
    font-size: 15px;
    height: 45px;
    display: flex;
    /* border-bottom: 13px solid #f8f7fc; */
  }
  .bottom .left {
    padding: 11px 0px 0px 17px;
  }
  .bottom .right {
    position: absolute;
    right: 25px;
    padding-top: 11px;
  }
</style>
