<template>
  <div class='HomeSwiper'>
      <Swiper>
        <swiper-item v-for='(item,id) in barnarLink' :key='id'>
          <a :href="item.link">
            <img src="~assets/img/swiper/cat.jpg" alt="" @load='loadswiper'>
          </a>
        </swiper-item>
      </Swiper>
  </div>
</template>

<script type="text/javascript">
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: "app",
  props: {
      barnarLink: {
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
      Swiper,
      SwiperItem
  },
  methods: {
    loadswiper() {
      this.$emit('loadswiper')
    }
  }
}
</script>

<style scoped>
</style>
