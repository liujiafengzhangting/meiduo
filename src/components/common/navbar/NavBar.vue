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
        display: flex;
        height: 44px;
        box-shadow: 0px 2px 1px rgba(100, 100, 100, 0.2);
        text-align: center;
        line-height: 44px;
        font-size: 18px;
        background-color:rgb(65, 65, 216);
        color: white;
        
    }
    .left,
    .right {
        /* background-color: pink; */
        width: 50px;
    }
    .center {
        /* display: flex; */
        flex: 1;
        /* text-align: center; */
        /* background-color: black */
    }

</style>
