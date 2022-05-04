<template>
  <div>
    <h1>Dropdown</h1>
    <hr/>
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