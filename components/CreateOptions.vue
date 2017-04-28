<template>
  <div class="create-options">
    <date-picker @addDate="addDate"></date-picker>

    <div v-for="date in sortedDateOptions" class="available-options">
      <date-option :date="date.date" @updateDateOptions="updateDateOptions"></date-option>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DatePicker from '~components/DatePicker'
import DateOption from '~components/DateOption'

export default {
  components: {
    DatePicker, DateOption
  },

  computed: {
    ...mapGetters([
      'sortedDateOptions'
    ])
  },

  methods: {
    ...mapActions({
      addDate: 'addDateOption'
    }),

    updateDateOptions (dateOption) {
      console.log(dateOption)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
