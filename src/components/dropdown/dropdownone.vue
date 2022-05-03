<template>
  <div>
    <button @click="showDropdown()">Dropdown</button>
    <Transition name="hello">
      <ul v-if="show">
        <li>List one</li>
        <li>List Two</li>
        <li>List Three</li>
      </ul>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown-one',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showDropdown() {
      this.show = !this.show
    }
  },
}
</script>
<style scoped src="../../../public/dropdown/style.css"></style>