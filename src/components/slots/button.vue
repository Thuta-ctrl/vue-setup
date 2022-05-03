<template>
  <div>
    <slot name="header"></slot>
    <slot name="item" :items="items"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'fancy-button',
  data() {
    return {
      items: [
        { body: 'hi', username: 'lawrence', likes: 10 }
      ]
    }
  }
}
</script>

<style>

</style>