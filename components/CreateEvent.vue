<template>
  <section class="create-event-form">
    <text-input :value="title" :label="labels.title" @update="updateTitle"></text-input>
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
        title: 'Name your event below.'
      }
    }
  },

  methods: {
    ...mapActions([
      'updateTitle'
    ])
  },

  computed: mapState({
    title: state => state.newEvent.title
  })
}
</script>

<style scoped lang="scss"></style>
