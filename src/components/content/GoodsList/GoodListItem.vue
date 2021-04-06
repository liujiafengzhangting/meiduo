<template>
  <div class='goodslistitem' @click='toDetail'>
      <img :src="goods.img" alt="" @load='loadImg'>
      <div class='goodsitem'>
        <p>{{goods.title}}</p>
        <div class='count'>
          <span>{{goods.price}}</span>
          <!-- <img src="~assets/img/feature/collect.svg" alt=""> -->
          <span class='collect'>{{goods.sell}}</span>
          <span>{{goods.type}}</span>
        </div>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    goods: {
        type: Object,
        default() {
            return {}
        }
    }
  },
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    loadImg(){
      this.$bus.$emit('loadImg')
    },
    toDetail(){
      this.$router.push('/detail/' + this.goods.id)
    }
  }
}
</script>

<style scoped>
  .goodslistitem {
    width: 48%;
    position: relative;
    padding-bottom: 50px;
  }
  .goodslistitem img {
      width: 100%;
  }
  .goodsitem {
    position: absolute;
    right: 3px;
    left:3px;
    bottom: 5px;
    overflow: hidden;
    text-align: center;
  }
  .goodsitem p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .count {
    display: flex;
  }
  .goodsitem span {
      flex: 1;
      padding-right: 10px;
      font-size: 15px;
  }
  .goodsitem .collect{
      position: relative;
  }
  .goodsitem .collect::before {
    content: '';
    position: absolute;
    left: -10px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/feature/collect.svg") 0 0/14px 14px;
  }

  
</style>
