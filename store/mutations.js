import * as types from './mutation-types'
import _ from '~plugins/lodash'

export default {
  [types.ADD_EVENT_META] (state, meta) {
    addEventMeta(state, meta)
  },

  [types.ADD_DATE_OPTION] (state, date) {
    addDateOption(state, date)
  },

  [types.ADD_TIME_SLOT] (state, timeSlot) {
    addTimeSlot(state, timeSlot)
  },

  [types.REMOVE_TIME_SLOT] (state, timeSlot) {
    removeTimeSlot(state, timeSlot)
  },

  [types.CREATE_EVENT] (state, event) {
    createEvent(state, event)
  }
}

const addEventMeta = (state, meta) => {
  state.newEvent.title = meta.title || state.newEvent.title
  state.newEvent.location = meta.location || state.newEvent.location
}

const addTimeSlot = (state, timeSlot) => {
  state.newEvent.options[_.findIndex(state.newEvent.options, { date: timeSlot.date })].times.push(timeSlot.time)
}

const removeTimeSlot = (state, timeSlot) => {
  state.newEvent.options[timeSlot.dateIndex].times = _.without(state.newEvent.options[timeSlot.dateIndex].times, timeSlot.payload)
}

const addDateOption = (state, date) => {
  state.newEvent.options.push({ date: date, times: [] })
}

const createEvent = (state, event) => {
  state.newEvent = event
}
