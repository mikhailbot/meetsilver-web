<template>
  <div class="header-container">
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'

export default {
  name: 'header-component',

  components: {
    NavigationBar
  }
}
</script>

<style scoped>

</style>
