<template>
  <div>
    <div class='left'>
      <div class='topleft'></div>
      <div class='top'></div>
      <div class='text'>新款</div>
    </div>
    <div class='right'>
      <div class='bottomright'></div>
      <div class='bottom'></div>
    </div>
    <div class='title'><span>穿着效果</span></div>
    <div class='detailimg' v-for='(item, id) in newstyle.detailimg' :key='id'>
      <img :src="item" alt="" @load='loadmore'>
    </div>
    <div class='describe'>
      <h4>价格描述</h4>
      <p>价格说明：划线价格为原价格，实际以显示价格为主，均为指导价，仅供参考</p>
      <p>划线价格：划线价格是商品的指导价，具体价格因使用优惠券和积分的不同而不同，以商家描述为准</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newstyle: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  },
  methods: {
    loadmore() {
      this.$emit('loadimg')
    }
  }
}
</script>

<style scoped>
  .top {
    /* margin-top: 10px; */
    width: 30%;
    height: 1px;
    background-color: rgb(156, 153, 153);
  }
  .topleft {
    margin-top:10px;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  .text {
    padding: 10px 0px 5px;
    font-size: 15px;
  }
  .left {
    padding-left: 10px;
  }
  .right {
    position: relative;
    height: 5px;
  }
  .bottomright {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    right: 10px;
  }
  .bottom {
    position: absolute;
    width: 30%;
    height: 1px;
    background-color: rgb(156, 153, 153);
    right: 10px;
    margin-top: 5px;
  }
  .title {
    padding: 10px;
    
  }
  .detailimg img {
    height: 560px;

  }
  .describe {
    border-left: 10px solid pink;
    margin-top: 10px;
    margin-bottom: 20px;
    padding-left: 5px;
  }
  .describe p {
    margin: 0px;
    font-size: 12px;
  }
  .describe h4 {
    margin: 0px;
    color: pink;
  }
</style>
