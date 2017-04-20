import * as types from './mutation-types'

export default {
  [types.CREATE_EVENT] (state, { event }) {
    createEvent(state, event)
  }
}

const createEvent = (state, event) => {
  state.newEvent = event
}
