// import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'

// Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    user,
    permission
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
