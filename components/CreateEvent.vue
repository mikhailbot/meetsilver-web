<template>
  <section class="create-event-form">
    <text-input :value="event.title" :label="labels.title" @update="updateTitle"></text-input>
    <text-input :value="event.location" :label="labels.location" @update="updateLocation"></text-input>
    <create-options></create-options>
    <vue-button :text="'Create event'" :label="labels.create" @click.native="newEvent"></vue-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import CreateOptions from '~components/CreateOptions'
import TextInput from '~components/TextInput'
import VueButton from '~components/VueButton'

export default {
  components: {
    CreateOptions, TextInput, VueButton
  },

  data () {
    return {
      labels: {
        title: 'Name your event below.',
        location: 'Where is the event taking place?',
        create: 'When ready, click below!'
      },
      event: {
        title: '',
        location: '',
        options: []
      }
    }
  },

  methods: {
    ...mapActions([
      'createEvent'
    ]),

    updateTitle (title) {
      this.event.title = title
    },

    updateLocation (location) {
      this.event.location = location
    },

    newEvent () {
      this.$store.dispatch('createEvent', this.event)
        .then(response => {
          this.$router.push(`/e/${response}`)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped lang="scss"></style>
