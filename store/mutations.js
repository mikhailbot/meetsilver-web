import * as types from './mutation-types'
import _ from '~plugins/lodash'

export default {
  [types.ADD_DATE_OPTION] (state, dateOption) {
    addDateOption(state, dateOption)
  },

  [types.CREATE_EVENT] (state, event) {
    createEvent(state, event)
  }
}

const addDateOption = (state, date) => {
  _.findIndex(state.newEvent.options, { date }) === -1 ? state.newEvent.options.push({ date }) : false
}

const createEvent = (state, event) => {
  state.newEvent = event
}
