<template>
  <div>
    Step Two
    <div>
      <button @click="back">Back</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'two-component',
  props: {
    step: {
      type: Number,
      require: true
    }
  },
  emits: ['upStep'],
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