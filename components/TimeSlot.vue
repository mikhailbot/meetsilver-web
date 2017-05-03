<template>
  <div class="time-slot" @click="removeTimeSlot(time)">
    {{ time | timeFilter }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: [ 'time' ],

  methods: {
    removeTimeSlot (time) {
      this.$store.dispatch('removeTimeSlot', time)
    }
  },

  filters: {
    timeFilter (value) {
      return moment(value).format('h:mm a')
    }
  }
}
</script>

<style scoped lang="scss"></style>
