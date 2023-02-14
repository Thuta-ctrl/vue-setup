<template>
  <div style="margin-top: 20px">
    <swiper 
      :modules="modules"
      navigation 
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
    >
      <swiper-slide class="slider">Slide 1</swiper-slide>
      <swiper-slide class="slider">Slide 2</swiper-slide>
      <swiper-slide class="slider">Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import SwiperClass, { Pagination, Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
      }
    }
  }
</script>
<style scoped>
.slider {
  width: 200px;
  height: 300px;
  background: grey;
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>