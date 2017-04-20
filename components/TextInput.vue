<template>
  <div class="text-input">
    <label>
      {{ label }}
      <input type="text" :value="value" @input="updateValue($event.target.value)" :style="{ width: width + 'rem'}"/>
    </label>
  </div>
</template>

<script>
export default {
  props: [ 'value', 'label' ],

  data () {
    return {
      width: 24
    }
  },

  methods: {
    updateValue (value) {
      if (value.length > 20) {
        this.width = value.length + 4
      } else {
        this.width = 24
      }

      this.$emit('update', value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/variables";

.text-input {
  max-width: 50rem;
  margin: auto;
}

label {
  display: block;
  max-width: inherit;
  color: $grey;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;

  input {
    display: block;
    max-width: inherit;
    margin: auto;
    padding: 0.5rem 0;
    font-weight: 700;
    font-size: 2rem;
    font-family: 'Roboto Slab', serif;
    text-align: center;
    border: none;
    border-bottom: 2px solid $primary-color;
    outline: none;
  }
}
</style>
