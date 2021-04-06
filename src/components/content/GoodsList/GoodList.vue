<template>
  <div class='goodslist'>
    <goodslistitem v-for='(item, id) in goodslist' :key='id' :goods='item'>
      
    </goodslistitem>
  </div>
</template>

<script type="text/javascript">
import goodslistitem from './GoodListItem'
export default {
  name: "app",
  props: {
    goodslist: {
        type: Array,
        default() {
            return []
        }
    }
  },
  data() {
    return {

    }
  },
  components: {
    goodslistitem
  }
}
</script>

<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
