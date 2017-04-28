import _ from '~plugins/lodash'

export const sortedDateOptions = state => {
  return _.sortBy(state.newEvent.options, 'date')
}
