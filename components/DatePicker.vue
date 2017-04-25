<template>
  <div class="datepicker">
    <input type="text" ref="datepicker" class="datepicker-input">
    <vue-button
      :text="'Add new date'"
      :label="'Great, let’s add some meeting times!'"
      ref="triggerdatepicker">
    </vue-button>
</div>
</template>

<script>
import VueButton from '~components/VueButton'

export default {
  components: {
    VueButton
  },

  data () {
    return {
      picker: null
    }
  },

  mounted () {
    const Pikaday = require('Pikaday')
    const vm = this
    this.picker = new Pikaday({
      field: this.$refs.datepicker,
      trigger: this.$refs.triggerdatepicker.$el.childNodes[0].children[0],
      minDate: new Date(),
      onSelect () {
        console.log(`Date selected was ${this.toString()}`)
        vm.addDate(this.getDate())
      }
    })
  },

  methods: {
    addDate (date) {
      this.$emit('addDate', date)
    }
  }
}
</script>

<style scoped lang="scss">
.datepicker {
  max-width: 18rem;
  margin: 2rem auto;

  .datepicker-input {
    display: none;
  }
}
</style>
