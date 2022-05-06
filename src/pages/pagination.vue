<template>
  <div>
    <h1>Pagination</h1>
    <my-paginate
      :page-count="10"
      :page-range="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :first-last-button="true"
      :break-view-text="'...'"
      :container-class="'pagination'"
      :first-button-text="'first button'"
      :page-class="'page-item'"
      :active-class="'active-page-item'"
      :disabled-class="'disable-page-item'"
    >
    </my-paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate-next'
export default {
  name: 'vue-paginate',
  components: {
    'my-paginate': Paginate,
  }
}
</script>

<style>
  .pagination {
    display: flex;
    list-style-type: none;
  }
  .page-item {
    padding: 10px;
    background-color: white;
  }
  .active-page-item {
    background-color: blue;
    color: white;
  }
  .disable-page-item {
    background-color: white;
  }
</style>