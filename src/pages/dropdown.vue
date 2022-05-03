<template>
  <div>
    <h1>Main Dropdown</h1>
    <hr/>
    Child
    <dropdown-one/>
    <dropdown-two/>
  </div>
</template>

<script>
import DropdownOne from '@/components/dropdown/dropdownone.vue'
import DropdownTwo from '@/components/dropdown/dropdowntwo.vue'
export default {
  name: 'drop-down',
  components: {
    DropdownOne,
    DropdownTwo
  }
}
</script>

<style>

</style>