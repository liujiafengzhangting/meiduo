<template>
  <div id="xinchou">
    <div class='top'>
      <nav-bar class='title'>
        <div slot='left'><img src="~assets/img/detail/reback.png" alt="">返回</div>
        <div slot='center'>收入纳税明细查询</div>
        <div slot='right'>批量申诉</div>
      </nav-bar>
      <total></total>
    </div>
      <scroll class='content'>
        <pre-cash v-for="(item,id) in totalList" :key="id" :item=item></pre-cash>
      </scroll>
  </div>
</template>

<script type="text/javascript">
import NavBar from './children/NavBar'
import Total from './children/Total'
import PreCash from './children/PreCash'
import scroll from 'components/common/scroll/Scroll'
export default {
  name: "app",
  data() {
    return {
      totalList: [
        {'total': '23000.00','suishou': '230.00', 'date': '2021-06'},
        {'total': '23100.00','suishou': '270.00', 'date': '2021-05'},
        {'total': '23100.00','suishou': '270.00', 'date': '2021-04'},
        {'total': '23100.00','suishou': '270.00', 'date': '2021-03'},
        {'total': '23100.00','suishou': '270.00', 'date': '2021-02'},
        {'total': '23100.00','suishou': '270.00', 'date': '2021-01'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-12'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-11'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-10'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-09'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-08'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-07'},
        {'total': '23100.00','suishou': '270.00', 'date': '2020-06'}]
    }
  },
  components: {
    NavBar,
    Total,
    PreCash,
    scroll
  }
}
</script>

<style scoped>
  /* #xinchou {
    position: relative;
  } */
  .top {
    position: relative;
    background-color: #ffffff;
    z-index: 99;
  }
  .title img {
    height: 18px;
    position: absolute;
    left: 14px;
    top: 13px;
  }
  .content {
    position: absolute;
    top: 148px;
    /* top: 0px; */
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>
