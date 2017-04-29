import * as types from './mutation-types'
import _ from '~plugins/lodash'
import moment from 'moment'

export const addEventMeta = ({ commit }, payload) => {
  commit(types.ADD_EVENT_META, payload)
}

export const addDateOption = ({ commit, state }, payload) => {
  _.findIndex(state.newEvent.options, { date: payload }) === -1 ? commit(types.ADD_DATE_OPTION, payload) : false
}

export const addTimeSlot = ({ commit, state }, payload) => {
  const dateIndex = _.findIndex(state.newEvent.options, { date: payload.date })

  const date = payload.date
  const time = moment(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${payload.time}`, 'D-M-YYYY H:m').format()

  _.indexOf(state.newEvent.options[dateIndex].times, time) === -1 ? commit(types.ADD_TIME_SLOT, { date, time }) : false
}
