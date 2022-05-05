<template>
  <div>
    Step Three
    <div>
      <button @click="back">Back</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'three-component',
  props: {
    step: {
      type: Number,
      require: true
    }
  },
  emits: ['upStep'],
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$emit('upStep', this.step-1)
    },
    next() {
      this.$emit('upStep', this.step+1)
    }
  }
}
</script>

<style>

</style>