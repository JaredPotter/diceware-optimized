<template>
  <div id="app">
    <DicewareOptimziedPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import DicewareOptimziedPage from './containers/DicewareOptimziedPage.vue'

export default {
  name: 'App',
  components: {
    DicewareOptimziedPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
