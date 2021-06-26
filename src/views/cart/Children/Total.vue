<template>
  <div id="app">
    <div class='total'>
      <div class='left' @click='totalChoose'>
        <img v-if='$store.state.isTotalChoose' class='actived' src="~assets/img/car/gou.jpg" alt="">
        <div v-else class='empty'></div>
        <span>全选</span>
      </div>
      <div class='center'>
        <span>合计：{{$store.getters.calcount}}</span>
      </div>
      <div class='right'>
        <div>去结算: {{$store.getters.calChooseCount}}</div>
      </div>
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
  },
  methods: {
    totalChoose() {
      this.$store.commit('totalChoose')
    }
  }
}
</script>

<style scoped>
  .total {
    height: 40px;
    width: 100%;
    background-color: #eae4e4;
    position: absolute;
    bottom: 50px;
    right: 0px;
    left: 0px;
    display: flex;
    align-items:center;
    
  }
  .empty {
    height: 16px;
    width: 16px;
    /* background-color: red; */
    border-radius: 16px;
    border: 3px solid #ccc;
  }
  .left {
    display: flex;
    width: 100px;
    justify-content: center;
  }
  .left span {
    padding-left: 10px;
  }
  .right {
    position: absolute;
    right: 0px;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #58b1f769;
  }
  .actived {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
</style>
