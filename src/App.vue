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
    </div>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
</style>
