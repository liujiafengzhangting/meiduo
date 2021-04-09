<template>
  <div>
    <div class='usercomment'>
      <h5>用户评价</h5>
      <span>更多</span>
    </div>
    <div class='commentcontent' v-if='comment.rate'>
      <div v-for='(item, id) in comment.rate.list' :key='id' class='percomment'>
        <div class='user'>
          <img :src="item.user.img" alt="" @load='loadmore'>
          <span>{{item.user.name}}</span>
        </div>
        <div class='contentitem'>
          <p>{{item.content}}</p>
          <span class='time'>{{item.createdate}}</span>
          <span>{{item.style}}</span>
          <div class='commentimg imgstyle'>
            <img v-for='(img, index) in item.imgs.slice(0,3)' :key='index' :src="img" alt="" @load='loadmore'>
            <div class='load' @click='isShow(id)' v-if='item.imgs.length > 3' v-show='currentId != id'>更多</div>
          </div>
          <div class='commentimg' v-if='currentId==id'>
            <img v-for='(img, index) in item.imgs.slice(2,-1)' :key='index' :src="img" alt="" @load='loadmore'>
            <div class='load' @click='isHide(id)'>收起</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      currentId: null
    }
  },
  methods: {
    isShow(id) {
      this.currentId = id
      
    },
    loadmore() {
      this.$emit('loaddetailimg')
    },
    isHide(id) {
      this.currentId = null
    },
  },
}
</script>

<style scoped>
  h5 {
    margin: 0px;
  }
  .usercomment {
    display: flex;
    padding: 15px 10px;
    border-top: 1px solid #ccc;
    justify-content: space-between;
    font-size: 12px;
  }
  .user img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .user {
    padding-top: 15px;
    
  }
  .user span {
    position: relative;
    top: -8px;
    left: 5px;
    font-size: 14px;
  }
  .percomment {
    border-top: 1px solid #ccc;
    margin: 0px 10px;
  }
  .contentitem {
    font-size: 14px;
  }
  .contentitem .time {
    padding-right: 5px;
  }
  .contentitem img {
    width: 50px;
    height:50px;
    padding-right: 5px;
    
  }
  .commentimg {
    width: 165px;
  }
  .styletext {
    padding-bottom: 10px;
  }
  .imgstyle {
    padding-top: 5px;
  }
  .load {
    padding-bottom: 5px;
  }
</style>
