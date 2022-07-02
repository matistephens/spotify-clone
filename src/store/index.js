import Vue from 'vue'
import Vuex from 'vuex'

import { playlistsModule as playlists } from './modules/playlists.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    playlists,
  }
})
