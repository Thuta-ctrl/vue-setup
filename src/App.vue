<template>
  <div id="app">
    <div class="declaration">
      <h1>Hello App!</h1>
      <span><router-link to="/">Home</router-link></span>
      <span><router-link to="/rendering">Rendering</router-link></span>
      <span><router-link to="/event">Event</router-link></span>
      <span><router-link to="/class-style">Class Style</router-link></span>
      <span><router-link to="/form-inputs">From Inputs</router-link></span>
      <span><router-link to="/props-emits">Props Emits</router-link></span>
      <span><router-link to="/provide-inject">Provide Inject</router-link></span>
      <span><router-link to="/plugin">Install Plugin</router-link></span>
      <span><router-link to="/vue-cli">Install Vue Using Cli</router-link></span>
      <span><router-link to="/dropdown">Dropdown</router-link></span>
      <span><router-link to="/modal">Modal</router-link></span>
      <span><router-link to="/chart-js">Chart JS</router-link></span>
      <span><router-link to="/infinite-scroll">Infinite Scroll</router-link></span>
      <span><router-link to="/reaction">Reaction</router-link></span>
      <span><router-link to="/accordion">Accordion</router-link></span>
      <span><router-link to="/stepper">Stepper</router-link></span>
      <span><router-link to="/click-outside">Click Outside</router-link></span>
      <span><router-link to="/pagination">Pagination</router-link></span>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
</div>
</template>

<script>
import Transition from './pages/transition.vue'

export default {
  name: 'App',
  components: {
    Transition
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.declaration {
  text-align: center;
}
.declaration span{
  margin-right: 20px;
}
.declaration span:last-child{
  margin-right: 0;
}
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

</style>
