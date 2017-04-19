<template>
  <div class="navigation-bar">
    <logo></logo>

    <input id="nav" type="checkbox">
    <label for="nav"></label>
    <navigation-items></navigation-items>
  </div>
</template>

<script>
import Logo from './Logo'
import NavigationItems from './NavigationItems'

export default {
  name: 'navigation-bar',
  components: {
    Logo, NavigationItems
  }
}
</script>

<style scoped lang="scss">
.navigation-bar {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  #nav {
    display: none;
  }

  #nav:checked ~ nav {
    max-height: 200px; /* This can be anything bigger than your nav height. The transition duration works with this */
    width: 100%;
  }

  label {
    float: right;
    cursor: pointer;

    &:after {
      content: "\2261";
      font-size: 1.8em;
    }
  }

  @media only screen and (min-width: 500px) {

    label {
      display: none;
    }
  }
}
</style>
