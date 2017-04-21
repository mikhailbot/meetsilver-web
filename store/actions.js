import * as types from './mutation-types'

export const createEvent = ({ commit }, payload) => {
  commit(types.CREATE_EVENT, payload)
  return payload
}
