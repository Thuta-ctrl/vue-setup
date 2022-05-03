<template>
  <FancyButton>
    <template v-slot:header="headerProps">
      <h1>Here might be a page title</h1>
      <h3>{{ headerProps.message }}</h3>
    </template>
    <template v-slot:footer>
      <p>Here's some contact info</p> 
    </template>
    <template v-slot:item="itemProps">
      <ul>
        <li v-for="{body,username,likes} in itemProps.items" :key="username">
          <div class="item">
            <p>{{ body }}</p>
            <p>by {{ username }} | {{ likes }} likes</p>
          </div>
        </li>
      </ul>
    </template>
  </FancyButton>
</template>

<script>
import FancyButton from '@/components/slots/button.vue'
export default {
  name: 'slot-page',
  components: {
    FancyButton
  },
}
</script>

<style>

</style>