<template>
  <div id="app">
    <div v-if='bannar.logo' class='shopinfo'>
      <img :src="bannar.logo.img" alt="">
    </div>
    <div class='shopdetail'>
      <div class='left'>
        <div>
          <ul>
            <li>{{bannar.totalsell}}</li>
            <li>商品总销量</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{{bannar.totalgoods}}</li>
            <li>全部宝贝</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    bannar: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>

  .shopinfo img {
    height: 80px;
    width: 100%;
    border-radius: 100px;
    padding: 10px 0px;
  }
  li {
    list-style:none;
  }
  .shopdetail {
    display: flex;
  }
  .left {
    flex: 1;
  }
</style>
