<template>
  <div>
    <h1>Pagination</h1>
    <my-paginate
      :page-count="10"
      :page-range="3"
      :prev-text="'前へ'"
      :next-text="'次へ'"
      :first-last-button="false"
      :break-view-text="'...'"
      :container-class="'pagination'"
      :first-button-text="'first button'"
      :page-link-class="'page-item'"
      :next-link-class="'page-item'"
      :prev-link-class="'page-item'"
      :active-class="'active-page-item'"
      :disabled-class="'disable-page-item'"
      :no-li-surround="true"
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
  },
  methods: {
    
  }
}
</script>

<style>
  .pagination {
    display: flex;
    list-style-type: none;
    align-items: center;
  }
  .page-item {
    font-size: 14px;
    padding: 14px 18px;
    color: #19CAFC;
    background-color: #fff;
    border: 1px solid #1ACAFC;
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;
    max-height: 45px;
    max-width: 45px;
  }
  .page-item a{
    display: inline-block;
  }
  .active-page-item {
    background-color: #1ACAFC;
    color: #fff;
  }
  .disable-page-item {
    background-color: white;
  }
  .page-item:first-child,
  .page-item:last-child{
    padding: 11.5px 18px;
    background-color: #1ACAFC;
    color: #fff;
    border: 1px transparent;
  }
  .page-item:first-child.disable-page-item,
  .page-item:last-child.disable-page-item{
    color: #BCBCBC;
    background-color: #F0F0F0;
    border: 1px solid #D0D0D0;
  }
</style>