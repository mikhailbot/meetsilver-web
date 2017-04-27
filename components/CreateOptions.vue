<template>
  <div class="create-options">
    <date-picker @addDate="addDate"></date-picker>

    <div v-for="date in sortedAvailableDates" class="available-options">
      <date-option :date="date"></date-option>
    </div>
  </div>
</template>

<script>
import DatePicker from '~components/DatePicker'
import DateOption from '~components/DateOption'

export default {
  components: {
    DatePicker, DateOption
  },

  data () {
    return {
      availableDates: []
    }
  },

  computed: {
    sortedAvailableDates () {
      return this.availableDates.sort()
    }
  },

  methods: {
    addDate (date) {
      this.availableDates.indexOf(date) === -1 ? this.availableDates.push(date) : false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
