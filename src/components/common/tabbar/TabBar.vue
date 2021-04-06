<template>
  <div id='tabbar'>
      <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
  @import '~assets/css/base.css';
  #tabbar {
    display: flex;
    height: 49px;
    background-color: #ccc;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 2px -4px 2px #cabebe;
    z-index: 9;
  }

</style>
