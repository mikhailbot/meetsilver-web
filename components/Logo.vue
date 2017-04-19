<template>
  <div class="logo">
    <router-link to="/"><span class="logo-accent">Meet</span>Silver</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "~assets/variables";

.logo {
  font-size: 2rem;
  font-weight: 700;

  a {
    text-decoration: none;
    color: $black;
  }

  .logo-accent {
    color: $primary-color;
  }
}
</style>
