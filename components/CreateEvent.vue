<template>
  <section class="create-event-form">
    <text-input :value="eventMeta.title" :label="labels.title" @update="updateTitle"></text-input>
    <text-input :value="eventMeta.location" :label="labels.location" @update="updateLocation"></text-input>
    <create-options></create-options>
    <vue-button :text="'Create event'" :label="labels.create" @click="newEvent"></vue-button>
  </section>
</template>

<script>
import _ from '~plugins/lodash'
import axios from '~plugins/axios'
import { mapActions, mapGetters } from 'vuex'
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

    updateTitle: _.debounce(function (title) {
      this.$store.dispatch('addEventMeta', { title })
    }, 1000),

    updateLocation: _.debounce(function (location) {
      this.$store.dispatch('addEventMeta', { location })
    }, 1000),

    newEvent () {
      const event = this.$store.state.newEvent
      const options = _.flatMap(event.options, (option) => {
        return _.map(option.times, (time) => {
          return { date: time }
        })
      })

      axios.post('/events', {
        event: {
          title: event.title,
          location: event.location,
          options_attributes: options
        }
      })
      .then((response) => {
        this.$router.push(`/e/${response.data.slug}`)
      })
      .catch((error) => {
        console.error(error)
      })
    }
  },

  computed: {
    ...mapGetters([
      'eventMeta'
    ])
  }
}
</script>

<style scoped lang="scss"></style>
