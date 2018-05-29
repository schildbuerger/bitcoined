<template>
  <div id="app">
    <glossar></glossar>
  </div>
</template>

<script>
import Glossar from './components/Glossar.vue'

export default {
  name: 'App',
  components: {Glossar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
