import * as types from './mutation-types'
import axios from '~plugins/axios'

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
