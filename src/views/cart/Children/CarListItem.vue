<template>
  <div id="app">
    <div v-if='goods' class='goods'>
      <div class='left' @click='changeChoose'>
        <img v-if='goods.isChoose' class='actived' src="~assets/img/car/gou.jpg" alt="">
        <div v-else class='empty'></div>
      </div>
      <div class='center'>
        <img class='goodsimg' :src="goods.img" alt="">
      </div>
      <div class='right'>
        <div class='title'>{{goods.title}}</div>
        <div class='subtitle'>{{goods.desc}}</div>
        <div>
          <span class='price'>￥{{goods.price}}</span>
          <span class='rightCount'>x {{goods.count}}</span>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    goods: {
      default: {},
      type: Object
    }
  },
  name: "app",
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    changeChoose() {
      this.$store.commit('change',{id: this.goods.id})
    }
  }
}
</script>

<style scoped>
  .actived {
    width: 20px;
    height: 20px;
    
  }
  .goodsimg {
    width: 80px;
    height: 120px;
    border-radius: 10px;
  }
  .goods {
    display: flex;
    width: 100%;
    padding: 10px 0px;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 2px 2px #ccc;
  }
  .left {
    width: 30px;
    height: 120px;
    /* text-align: center;
    line-height: 120px; */
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .right {
    width: 250px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .rightCount {
    position: absolute;
    right: 20px;
  }
  .right div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title {
    font-size: 24px;
    font-weight: 800;
    padding-bottom: 15px;
  }
  .subtitle {
    font-size: 15px;
    padding-bottom: 30px;
  }
  .right span {
    font-size: 20px;
  }
  .price {
    color: red;
  }
  .empty {
    height: 16px;
    width: 16px;
    /* background-color: red; */
    border-radius: 16px;
    border: 3px solid #ccc;
  }
</style>
