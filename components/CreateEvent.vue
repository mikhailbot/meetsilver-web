<template>
  <section class="create-event-form">
    <text-input :value="title" :label="labels.title" @update="updateTitle"></text-input>
    <text-input :value="location" :label="labels.location" @update="updateLocation"></text-input>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TextInput from '~components/TextInput'

export default {
  components: {
    TextInput
  },

  data () {
    return {
      labels: {
        title: 'Name your event below.',
        location: 'Where is the event taking place?'
      }
    }
  },

  methods: {
    ...mapActions([
      'updateTitle', 'updateLocation'
    ])
  },

  computed: mapState({
    title: state => state.newEvent.title,
    location: state => state.newEvent.location
  })
}
</script>

<style scoped lang="scss"></style>
