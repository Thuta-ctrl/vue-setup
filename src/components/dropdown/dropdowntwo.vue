<template>
  <h1>Dropdown Two</h1>
   <div class="menu">
    <button @click="showMore()">More
    </button>
    <div v-if="more" class="more_content">
      <ul class="list">
        <li>
          <p>name</p>
          <p>comment</p>
        </li>
      </ul>
    </div>
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
.more_content .list{
    transition: all, 3s, ease-out;
}
</style>