import Vuex from 'vuex'
import * as actions from './actions'
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
  mutations
})

export default store
