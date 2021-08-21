<template>
  <h2>{{ customTitle }}</h2>
  <p>
    <span data-counter="counter">{{ counter }}</span>
    <sup>{{ power }}</sup> = {{ squareCounter }}
  </p>

  <div>
    <button @click="decreaseCounter">-1</button>
    <button @click="increaseCounter">+1</button>
    <button @click="decreasePower">-1</button>
    <button @click="increasePower">+1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: String,
    start: {
      type: Number,
      default: 25,
      validator(value) {
        return value >= 0
      }
    }
  },
  data() {
    return {
      counter: this.start,
      power: 2
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    },
    increasePower() {
      this.power++
    },
    decreasePower() {
      this.power--
    }
  },
  computed: {
    squareCounter() {
      return this.counter ** this.power
    },
    customTitle() {
      return this.title || 'Counter'
    }
  }
}
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
