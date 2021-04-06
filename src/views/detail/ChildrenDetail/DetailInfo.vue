<template>
  <div id="app" v-if='detailinfo.price'>
    <h2>{{detailinfo.title}}</h2>
    <span class='currentprice'>￥{{detailinfo.price.currentprice}}</span>
    <span class='oldprice'>￥{{detailinfo.price.oldprice}}</span>
    <span class='discount' v-if='detailinfo.price.isoldprice'>今日特价</span>
    <div class='baseinfo'>
      <span class='left'>销量：{{detailinfo.sellinfo.sell}}</span>
      <span class='center'>收藏：{{detailinfo.sellinfo.fans}}</span>
      <span class='right'>{{detailinfo.methods[0].method}}</span>
    </div>
    <div class='sendinfo'>
      <span v-for='(item, index) in detailinfo.sendtype' :key='index'>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    detailinfo: {
      type: Object,
      default: {}
    }
  },
  components: {
  },
  created() {
    console.log()
  }
}
</script>

<style scoped>
  .currentprice {
      font-size: 30px;
      color: pink;
      padding-right: 9px;
  }
  .oldprice {
      color: #ccc;
      text-decoration: line-through;
  }
  .discount {
      background-color: red;
      font-size: 18px;
      border-radius: 9px;
      padding: 0 5px;
      color: white;
      position: relative;
      top: -15px;
      left: 7px;
  }
  .baseinfo {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 2px solid #ccc;
    font-size: 12px;
  }
  .sendinfo {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 2px solid #ccc;
  }
  
</style>
