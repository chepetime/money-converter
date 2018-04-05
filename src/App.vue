<template>
  <div id="app">

    <!-- Header -->

    <router-view/>

    <!-- Footer -->

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss">
  @import 'scss/app.scss';
  body {}
</style>
