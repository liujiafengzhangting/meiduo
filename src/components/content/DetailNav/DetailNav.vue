<template>
  <div id='detail'>
    <div class='detailnavleft'>
      <slot name='left'></slot>
    </div>
    <div class='detailnavright'>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #detail {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 30;
    background-color: white;
    display: flex;
  }
  .detailnavleft {
    width: 50%;
    height: 44px;
    display: flex;
    /* flex: 1; */
  }
  .detailnavright {
    display: flex;
    width: 50%;
    height: 44px;
    /* flex: 1; */
  }
</style>
