<template>
  <div id="tabbaritem" @click='btnActive'>
    <div v-if='!isActive==true'>
      <slot name='activeImg'></slot>
    </div>
    <div v-else>
      <slot name='disactiveImg'></slot>
    </div>
    <div :style='textActive'>
      <slot name='text'></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {
    path: String,
    textColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      active: true
    }
  },
  components: {
  },
  methods: {
    btnActive() {
      if (this.path != this.$route.path) {
        this.$router.push(this.path)
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == -1
    },
    textActive() {
      return this.isActive? {} : {color: this.textColor} 
    }
  }
  
}
</script>

<style scoped>
  #tabbaritem {
      flex: 1;
      text-align: center;
      font-size: 12px;
  }
  #tabbaritem img {
      height: 24px;
      width: 24px;
      margin-top: 5px;
  }
</style>
