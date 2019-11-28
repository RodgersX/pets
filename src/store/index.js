import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-multiple-empty-lines


import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
