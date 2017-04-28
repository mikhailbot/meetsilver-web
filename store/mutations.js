import * as types from './mutation-types'
import _ from '~plugins/lodash'

export default {
  [types.ADD_DATE_OPTION] (state, date) {
    addDateOption(state, date)
  },

  [types.ADD_TIME_SLOT] (state, timeSlot) {
    addTimeSlot(state, timeSlot)
  },

  [types.CREATE_EVENT] (state, event) {
    createEvent(state, event)
  }
}

const addTimeSlot = (state, timeSlot) => {
  state.newEvent.options[_.findIndex(state.newEvent.options, { date: timeSlot.date })].times.push(timeSlot.time)
}

const addDateOption = (state, date) => {
  state.newEvent.options.push({ date: date, times: [] })
}

const createEvent = (state, event) => {
  state.newEvent = event
}
