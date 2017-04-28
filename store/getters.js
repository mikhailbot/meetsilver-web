import _ from '~plugins/lodash'

export const eventMeta = state => {
  return { title: state.newEvent.title, location: state.newEvent.location }
}

export const sortedDateOptions = state => {
  return _.sortBy(state.newEvent.options, 'date')
}

export const getDateTimes = state => (date) => {
  return state.newEvent.options[_.findIndex(state.newEvent.options, { date })].times.sort()
}
