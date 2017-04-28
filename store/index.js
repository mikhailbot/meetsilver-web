import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const store = new Vuex.Store({
  state: {
    newEvent: {
      title: '',
      location: '',
      options: []
    }
  },
  actions,
  getters,
  mutations
})

export default store
