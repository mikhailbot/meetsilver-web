<template>
  <div class="text-input">
    <label>
      {{ label }}
      <input type="text" :value="title" @input="updateValue($event.target.value)"/>
    </label>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'label' ],

  methods: {
    updateValue (value) {
      this.$emit('update', value.trim())
    }
  }
}
</script>
