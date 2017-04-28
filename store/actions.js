import * as types from './mutation-types'
import axios from '~plugins/axios'
import _ from '~plugins/lodash'

export const addDateOption = ({ commit, state }, payload) => {
  _.findIndex(state.newEvent.options, { date: payload }) === -1 ? commit(types.ADD_DATE_OPTION, payload) : false
}

export const addTimeSlot = ({ commit, state }, payload) => {
  const dateIndex = _.findIndex(state.newEvent.options, { date: payload.date })

  _.indexOf(state.newEvent.options[dateIndex].times, payload.time) === -1 ? commit(types.ADD_TIME_SLOT, payload) : false
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
