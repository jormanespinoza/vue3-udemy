<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Counter :start="1" /> -->
  <Indesition />
</template>

<script>
// import Counter from '@/components/Counter'
import Indesition from '@/components/Indesition'

export default {
  name: 'App',
  components: {
    // Counter,
    Indesition
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
