<template>
  <section class="create-event-page">
    <create-event></create-event>
  </section>
</template>

<script>
import CreateEvent from '~components/CreateEvent'

export default {
  components: {
    CreateEvent
  },

  head () {
    return {
      title: 'Create Event | MeetSilver'
    }
  }
}
</script>

<style scoped lang="scss"></style>
