<template>
  <div class='navbar'>
      <div class='left'><slot name='left'></slot></div>
      <div class='center'><slot name='center'></slot></div>
      <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
  },
  data() {
    return {

    }
  },
  components: {
  },
  computed: {
      
  }
}
</script>

<style scoped>
    .navbar {
        position: relative;
        display: flex;
        height: 44px;
        
        text-align: center;
        line-height: 44px;
        background-color: #fff;

        border-bottom: 12px solid #f8f7fc;
        
    }
    .navbar .left {
      color: #547cc2;
      font-size: 14px;
    }
    .navbar .center {
      color: #3f3f3f;
      font-size: 18px;
    }
    .navbar .right {
      color: #5588c9;
      font-size: 14px;
    }
    .left,
    .right {
        /* background-color: pink; */
        width: 90px;
    }
    .center {
        /* display: flex; */
        flex: 1;
        /* text-align: center; */
        /* background-color: black */
    }


</style>
