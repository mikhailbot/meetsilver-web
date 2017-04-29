<template>
  <div class="create-options">
    <date-picker></date-picker>

    <div v-for="date in sortedDateOptions" class="available-options">
      <date-option :date="date.date"></date-option>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  }
}
</script>

<style scoped lang="scss">
</style>
