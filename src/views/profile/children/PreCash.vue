<template>
  <div id='app'>
    <div class='cash'>
      <div class='top'>
        <span class='left'>工资薪金</span>
        <span class='right'>{{item.date}}</span>
      </div>
      <div class='bottom'>
        <ul>
          <li>所得项目小类: 正常工资薪金</li>
          <li>扣缴义务人: 上海分泽时代软件技术有... <img src="~assets/img/detail/rightback.png" alt=""></li>
          <li>收入: {{item.total}}元</li>
          <li>已申报税额: {{item.suishou}}元</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    item: {
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
  }
}
</script>

<style scoped>
  .cash {
    height: 175px;
    border-top: 13px solid #f7f6fb;
  }
  .top {
    display: flex;
    font-size: 15px;
  }
  .top .left{
    padding: 17px 0px 0px 17px;
  }
  .top .right {
    position: absolute;
    right: 49px;
    padding-top: 17px;
  }
  ul,li{ 
      padding:0;
      margin:0;
      list-style:none}
  li {
    padding: 8px 0px 0px 17px;
    color: #929292;
    font-size: 15px;
  }
  li img {
    height: 17px;
    position: absolute;
    right: 30px;
  }
</style>
