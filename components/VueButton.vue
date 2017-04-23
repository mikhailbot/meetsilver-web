<template>
  <div class="button">
    <label>
      {{ label }}
      <button class="button">{{ text }}</button>
    </label>
  </div>
</template>

<script>
export default {
  props: [ 'label', 'text' ]
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

    button {
      display: block;
      margin-top: 1rem;
      padding: 0.75rem 2.25rem;
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
}
</style>
