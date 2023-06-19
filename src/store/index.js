import Vue from 'vue'
import Vuex from 'vuex'
// import { axios } from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
  },
  mutations: {
    increaseCounter(state) {
    state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
  },
  actions: {
    
  },
  modules: {
  }
})
