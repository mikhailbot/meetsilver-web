import * as types from './mutation-types'
import axios from '~plugins/axios'
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
  const time = moment(`${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()} ${payload.time}`, 'D-M-YYYY H:m').format()

  _.indexOf(state.newEvent.options[dateIndex].times, time) === -1 ? commit(types.ADD_TIME_SLOT, { date, time }) : false
}

export const createEvent = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/events', payload)
      .then((response) => {
        commit(types.CREATE_EVENT, payload)
        resolve(response.data.slug)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
