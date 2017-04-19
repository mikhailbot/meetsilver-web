<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'app',

  components: {
    HeaderComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');

body, html {
  margin: 0;
  font-family: 'Roboto Slab', serif;
}
#app {

}
</style>
