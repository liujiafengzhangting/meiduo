<template>
  <div id="app">
    <div v-for='(item,id) in $store.state.goodsdetail' :key='id' class='goodslist'>
      <car-list-item :goods='item'></car-list-item>
    </div>
    
  </div>
</template>

<script type="text/javascript">
import CarListItem from './CarListItem'
export default {
  name: "app",
  data() {
    return {
      
    }
  },
  components: {
    CarListItem
  }
}
</script>

<style scoped>
  
</style>
