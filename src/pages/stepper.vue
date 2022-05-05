<template>
  <div>
    <custom-stepper/>
    <custom-stepper-two/>
  </div>
</template>

<script>
import CustomStepper from '@/components/stepper/custom.vue'
import CustomStepperTwo from '@/components/stepper/customtwo.vue'
export default {
  name: 'stepper-page',
  components: {
    CustomStepper,
    CustomStepperTwo
  }
}
</script>

<style>

</style>