<template>
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  name: "app",
  data() {
    return {
      scroll: null
    }
  },
  components: {
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        // probeType: this.probeType,
        pullUpLoad: true
    })
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullUpload')
    })
  
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log('---------------')
    }
  }
}
</script>

<style scoped>
  
</style>
