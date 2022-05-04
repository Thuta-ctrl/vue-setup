<template>
  <h1>Dropdown Two</h1>
   <div class="menu">
    <button @click="showMore()">More
    </button>
    <transition name="more_content">
      <ul v-if="more" class="list">
        <li>
          <p>name</p>
          <p>comment</p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown-two',
  data() {
    return {
      more: false
    }
  },
  methods: {
    showMore() {
      this.more = !this.more
    }
  },
}
</script>

<style>
.more_content-enter-active,
.more_content-leave-active {
  transition: opacity 0.5s ease;
}

.more_content-enter-from,
.more_content-leave-to {
  opacity: 0;
}
</style>