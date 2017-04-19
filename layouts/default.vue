<template>
  <div>
    <navigation-bar></navigation-bar>
    <nuxt/>
  </div>
</template>

<script>
import NavigationBar from '~components/NavigationBar'

export default {
  name: 'header-component',

  components: {
    NavigationBar
  }
}
</script>

<style scoped lang="scss"></style>
