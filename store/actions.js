import * as types from './mutation-types'

export const createEvent = ({ commit }, payload) => {
  commit(types.CREATE_EVENT, { payload })
}

export const updateTitle = ({ commit }, payload) => {
  commit(types.UPDATE_TITLE, payload)
}
