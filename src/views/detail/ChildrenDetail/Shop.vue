<template>
  <div id="app">
    <div v-if='bannar.logo' class='shopinfo'>
      <img :src="bannar.logo.img" alt="">
    </div>
    <div class='shopdetail'>
      <div class='left'>
        <div>
          <ul>
            <li><span>{{bannar.totalsell}}</span></li>
            <li>总销量</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><span>{{bannar.totalgoods}}</span></li>
            <li>全部宝贝</li>
          </ul>
        </div>
      </div>
      <div class='right'>
        <table v-if='bannar.comment'>
          <tr>
            <td>描述相符</td>
            <td>{{bannar.comment.same}}</td>
            <td class='comment' :class={redcomment:getredcomment(issame)}>{{issame}}</td>
          </tr>
          <tr>
            <td>价格合理</td>
            <td>{{bannar.comment.pricebetter}}</td>
            <td class='comment' :class={redcomment:getredcomment(ispricebetter)}>{{ispricebetter}}</td>
          </tr>
          <tr>
            <td>质量满意</td>
            <td>{{bannar.comment.good}}</td>
            <td class='comment' :class={redcomment:getredcomment(isgood)}>{{isgood}}</td>
          </tr>
        </table>
      </div>

    </div>
    <div class='goshop'>
      <div>进店逛逛</div>
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
      issame: null,
      ispricebetter: null,
      isgood: null,
    }
  },
  components: {
  },
  updated() {
   this.getComment()
  },
  methods: {
     getComment() {
      if(this.bannar.comment) {
        console.log(typeof(this.bannar.comment.issame))
        this.bannar.comment.same > 5? this.issame = '高': this.issame = '低'
        this.bannar.comment.pricebetter > 5? this.ispricebetter = '高': this.ispricebetter = '低'
        this.bannar.comment.good > 5? this.isgood = '高': this.isgood = '低'
      }
    },
    getredcomment(comment) {
      return comment === '高'
    }
  },
  computed:{
    
  }
}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  .shopinfo img {
    height: 80px;
    width: 100%;
    border-radius: 100px;
    padding: 10px 0px;
  }
  li {
    list-style: none;
  }
  .left {
    display: flex;
    width: 50%;
    text-align: center;
    font-size: 12px;
    flex: 1;
    padding-top: 13px;
  }
  .left div{
    flex: 1;
  }
  .left span {
    font-size: 20px;
  }
  .shopdetail {
    display: flex;
  }
  .right {
    flex: 1;
  }
  .right table {
    margin: auto;
  }
  .right td {
    padding: 0 4px;
  }
  .comment {
    background-color: rgb(139, 240, 139);
  }
  .redcomment {
    background-color: rgb(240, 105, 105);
  }
  .goshop {
    padding: 20px 0px;
    border-bottom: 2px solid #ccc;
  }
  .goshop div {
    text-align: center;
    width: 150px;
    margin: auto;
    background-color: rgb(219, 217, 217);
    border-radius: 10px;
    height: 25px;
    font-size: 14px;
    line-height: 25px;
    
  }
</style>
