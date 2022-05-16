<template>
  <div>
    <custom-infinite-scroll />
    <!-- <scroll-one/> -->
  </div>
</template>

<script>
import CustomInfiniteScroll from '@/components/infinitescroll/custom.vue'
// import ScrollOne from '@/components/infinitescroll/one.vue'
export default {
  name: 'lazy-loader',
  components: {
    // ScrollOne
    CustomInfiniteScroll
  }
}
</script>

<style>

</style>