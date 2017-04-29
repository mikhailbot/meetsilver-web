<template>
  <div class="button">
    <label>
      {{ label }}
    </label>
    <button class="button" @click="click">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: [ 'label', 'text' ],

  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/variables";

.button {
  margin: auto;

  label {
    color: $grey;
    text-align: center;
    display: block;
  }

  button {
    display: block;
    margin-top: 1rem;
    padding: 0.75rem 2.25rem;
    font-family: 'Roboto Slab', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: $white;
    background: $primary-color;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}
</style>
