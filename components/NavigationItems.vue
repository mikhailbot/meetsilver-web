<template>
  <nav>
    <ul>
      <li>
        <router-link to="/create">Create Event</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation-items'
}
</script>

<style scoped lang="scss">
@import "~assets/variables";

nav {
  max-height: 0;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s;

  ul {
    padding: 0;
    margin: 0;

    li {
      display: block;
      text-align: center;
      padding-top: 1rem;

      a {
        text-decoration: none;
        color: $black;
      }
    }
  }
}

@media only screen and (min-width: 500px) {

  nav {
    width: auto;
    max-height: none;
    display: block;

    ul li {
      display: inline-block;
      text-align: left;
      display: inline-block;
      padding: 0 10px;
      width: auto;
    }
  }
}
</style>
