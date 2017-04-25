<template>
  <div class="create-options">
    <date-picker @addDate="addDate"></date-picker>

    <div v-for="date in availableDates">
      {{ date }}
    </div>
  </div>
</template>

<script>
import DatePicker from '~components/DatePicker'

export default {
  components: {
    DatePicker
  },

  data () {
    return {
      availableDates: []
    }
  },

  methods: {
    addDate (date) {
      this.availableDates.push(date)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
