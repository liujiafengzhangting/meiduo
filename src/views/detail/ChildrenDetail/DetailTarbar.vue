<template>
  <navbar>
    <div slot='left' class='backhome' @click='backHome'>
      <img src="~assets/img/home/back.svg" alt="">
    </div>
    <div slot='center' class='title'>
      <span v-for='(item, id) in navbars' :key='id' class='subtitle' @click='chooseShop(id)' :class={activeColor:isActive(id)}>
        {{item}}
      </span>
    </div>
  </navbar>
</template>

<script type="text/javascript">
import navbar from 'components/common/navbar/NavBar'
export default {
  name: "detailnavbar",
  props: {
    positionId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      navbars: ['商品', '参数', '评论', '推荐'],
      currentId: 0,
    }
  },
  components: {
    navbar
  },
  methods: {
    backHome() {
      this.$router.back()
    },
    chooseShop(id) {
      this.currentId = id
      this.$emit('toPosition', id)
    },
    isActive(id) {
      return this.currentId === id 
    }
  },
  computed: {
    
  },
  watch: {
    positionId: {
      handler(newvalue, oldvalue) {
        this.currentId = newvalue
      }
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
  .activeColor {
    color: pink;
  }
</style>
