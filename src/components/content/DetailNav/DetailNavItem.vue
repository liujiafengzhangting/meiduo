<template>
  <div class='detailnavitem'>
    <div class='img'><slot name='img'></slot></div>
    <div class='text'><slot name='text'></slot></div>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  .img img{
    width: 25px;
    height: 25px;
  }
  .text {
    font-size: 12px;
  }
  .detailnavitem {
    flex: 1;
    text-align: center;
  }
</style>
