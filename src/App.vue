<template>
  <div id="app">
    <div id="nav">
      <keep-alive exclude='detail, cart'>
        <router-view></router-view>
      </keep-alive>
      <!-- <maintabbar/> -->
    </div>
  </div>
</template>

<script>
  import maintabbar from 'components/content/maintabbar/MainTabBar'
  export default {
    components: {
      maintabbar
    }
  }
</script>

<style>
  
</style>
