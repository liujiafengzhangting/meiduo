import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsdetail: [],
    isTotalChoose: false
  },
  mutations: {
    incream(state, playload) {
      let same = state.goodsdetail.find(item => item.id == playload.id)
      if(same){
        same.count ++
      }else{
        state.goodsdetail.push(playload)
      }
      this.commit('changeTotalChoose')
    },
    change(state, playload){
      let goods = state.goodsdetail.find(item => item.id == playload.id)
      goods.isChoose = !goods.isChoose
      this.commit('changeTotalChoose')
    },
    totalChoose(state) {
      state.isTotalChoose = !state.isTotalChoose
      for(let item of state.goodsdetail){
        item.isChoose = state.isTotalChoose
      }
    },
    changeTotalChoose(state) {
      let totalChoose = state.goodsdetail.find(item => {
        return item.isChoose == false
      })
      if(totalChoose) {
        state.isTotalChoose = false
      }else {
        state.isTotalChoose = true
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    calcount(state) {
      let total = 0;
      for(let item of state.goodsdetail){
        if(item.isChoose){
          total += item.count * item.price
        }
      }
      return total
    },
    calChooseCount(state) {
      let count = state.goodsdetail.filter(item => {
        return item.isChoose === true
      })
      return count.length
    }
    
  }
})
