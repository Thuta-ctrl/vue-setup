<template>
  <div class="container">
    <h6>Lazy Loader One</h6>

    <transition-group>
      <div class="card" v-for="city in cities" :key="city.name" v-show="cities">
      <h6 class="card-title">{{ city.name }}</h6>
      </div>
    </transition-group>
    
    <div class="loading" v-if="loading">
      <div class="loadingio-spinner-spinner-q4um5cjvjpg"><div class="ldio-c9znwqcxtq">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div></div>
    </div>

    <div v-if="nomore" class="nomore">
      No more data
    </div>
  </div>
</template>

<script>
import cities from '@/reuseable/city.json'
export default {
  name: 'lazy-loader-one',
  data() {
    return {
      cities: [],
      loading: false,
      count: 0,
      nomore: false
    }
  },
  methods: {
    infiniteScroll() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100 && !this.nomore && !this.loading) {
        this.loading = true
        setTimeout(() => {
          let c = cities.slice(this.count, this.count + 10)
          c.map(data => {
            this.cities.push(data)
          })
          if (c.length > 0) {
            this.count += 10
          } else {
            this.nomore = true
          }
          this.loading = false
        }, 1000)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.infiniteScroll)
  },
  created() {
    this.loading = true
    setTimeout(() => {
      let c = cities.slice(0,10)
      c.map(data => {
        this.cities.push(data)
      })
      this.count = 10
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: rotateY(60deg);
  }
  .container {
    margin: 0 auto;
    max-width: 1100px;
  }
  .card {
    padding: 5px;
    margin: 5px;
    text-align: center;
    background-color: antiquewhite;
  }
  .loading,.nomore {
    text-align: center;
  }
 
  @keyframes ldio-c9znwqcxtq {
    0% { opacity: 1 }
    100% { opacity: 0 }
  }
.ldio-c9znwqcxtq div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-c9znwqcxtq linear 1s infinite;
  background: #fe718d;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}.ldio-c9znwqcxtq div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #fe718d;
}.ldio-c9znwqcxtq div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #fe718d;
}
.loadingio-spinner-spinner-q4um5cjvjpg {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-c9znwqcxtq {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-c9znwqcxtq div { box-sizing: content-box; }

</style>