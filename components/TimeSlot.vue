<template>
  <div class="time-slot">
    {{ time | timeFilter }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: [ 'time' ],

  filters: {
    timeFilter (value) {
      return moment(value).format('h:mm a')
    }
  }
}
</script>

<style scoped lang="scss"></style>
