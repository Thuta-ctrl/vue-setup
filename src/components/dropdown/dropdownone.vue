<template>
  <h3>Dropdown One</h3>
  <div class="menu">
    <div @click="showDropdown()" class="menu_list">
      <img src="@/assets/img_menu.png" alt="Menu">
    </div>
    <Transition name="hello">
      <ul v-if="show" class="menu_item">
        <li>
          <p>One</p>
        </li>
        <li>
          <p>Two</p>
        </li>
        <li>
          <p>Three</p>
        </li>
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