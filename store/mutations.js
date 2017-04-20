import * as types from './mutation-types'

export default {
  [types.CREATE_EVENT] (state, { event }) {
    console.log({ state })
    console.log({ event })
    createEvent(state, event)
  },

  [types.UPDATE_TITLE] (state, title) {
    updateTitle(state, title)
  },

  [types.UPDATE_LOCATION] (state, location) {
    updateLocation(state, location)
  }
}

const createEvent = (state, event) => {
  state.newEvent = event
}

const updateTitle = (state, title) => {
  state.newEvent.title = title
}

const updateLocation = (state, location) => {
  state.newEvent.location = location
}
