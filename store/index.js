import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

const store = new Vuex.Store({
  state: {
    newEvent: {
      title: ''
    }
  },
  actions,
  mutations
})

export default store
