<template>
  <div class="event-page">
    <div v-if="error">
      <h2>Error getting event...</h2>
    </div>
    <div v-else>
      <h1>Event Page</h1>
    </div>
  </div>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data () {
    return {
      event: {
        title: '',
        location: '',
        options: []
      },
      error: false
    }
  },

  created () {
    axios.get(`/events/${this.$route.path.substring(3)}`)
      .then((response) => {
        if (response.data) {
          this.event = response.data
        } else {
          this.error = true
        }
      })
      .catch((error) => {
        console.error(error)
        this.error = true
      })
  }
}
</script>

<style scoped lang="scss">
</style>
