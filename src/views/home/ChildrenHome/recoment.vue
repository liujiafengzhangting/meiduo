<template>
  <div class='recomend'>
      <div v-for='(item, id) in recomend' :key='id' class='recomendItem'>
          <img :src="item.img" alt="">
          <div>{{item.message}}</div>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
      recomend: {
          type: Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
    .recomend {
        display: flex;
        padding: 10px 0px;
        border-bottom: 10px solid #eee;
    }
    .recomendItem {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .recomend img {
        width: 85px;
        height: 85px;
        margin-bottom: 5px;
        border-radius: 45px;
    }
</style>
