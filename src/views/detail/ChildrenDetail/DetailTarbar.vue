<template>
  <navbar>
    <div slot='left' class='backhome' @click='backHome'>
      <img src="~assets/img/home/back.svg" alt="">
    </div>
    <div slot='center' class='title'>
      <span v-for='(item, id) in navbars' :key='id' class='subtitle'>
        {{item}}
      </span>
    </div>
  </navbar>
</template>

<script type="text/javascript">
import navbar from 'components/common/navbar/NavBar'
export default {
  name: "detailnavbar",
  data() {
    return {
      navbars: ['商品', '参数', '详情', '推荐']
    }
  },
  components: {
    navbar
  },
  methods: {
    backHome() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .subtitle {
    flex: 1;
  }
  .backhome {
    padding-top: 5px;
  }
  
</style>
