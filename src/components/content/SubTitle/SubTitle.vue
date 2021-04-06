<template>
  <div class="sub-title">
      <div v-for='(item,id) in title' :key='id' class='sub-title-item' @click='itemClick(id)'>
        <span :class='{active: currentIndex === id}'>{{item}}</span>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    title: {
      type: Array,
      default() {
          return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
  },
  methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('subclick',index)
      }
  }
}
</script>
  
<style scoped>
  .sub-title {
    display: flex;
    text-align: center;
    height: 40px;
    background-color: white;
    line-height: 40px;
    font-size: 15px;
    z-index: 2;
  }
  .sub-title-item {
    flex: 1;
  }
  .sub-title-item span {
      padding: 5px;
  }
  .active {
      color: pink;
      border-bottom: 2px solid pink;
  }
</style>
