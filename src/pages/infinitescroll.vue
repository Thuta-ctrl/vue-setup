<template>
  <div>
    <custom-infinite-scroll />
  </div>
</template>

<script>
import CustomInfiniteScroll from '@/components/infinitescroll/custom.vue'
export default {
  name: 'lazy-loader',
  components: {
    CustomInfiniteScroll
  }
}
</script>

<style>

</style>