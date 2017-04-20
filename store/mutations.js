import * as types from './mutation-types'

export default {
  [types.CREATE_EVENT] (state, { event }) {
    console.log({ state })
    console.log({ event })
    createEvent(state, event)
  },

  [types.UPDATE_TITLE] (state, title) {
    updateTitle(state, title)
  }
}

const createEvent = (state, event) => {
  state.newEvent = event
}

const updateTitle = (state, title) => {
  state.newEvent.title = title
}
