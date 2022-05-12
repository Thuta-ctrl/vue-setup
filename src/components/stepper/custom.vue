<template>
  <div class="d-stepper">
    <div class="d-stepper-header">
      <div
        class="step-number-content"
        :class="{ active: step == i+1 }"
        v-for="(stepItem, i) in steps"
        :key="i"
        @click="gotoStep(i)"
      >
        <div
          class="step-number"
          :class="stepNumberClasses(i+1)"
        >
          <i v-if="step > i+1">{{ stepItem.name }}</i>
          <i v-else-if="step === i+1">{{ stepItem.name }}</i>
          <span v-else>{{ i + 1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-stepper',
  data() {
    return {
      steps: [
        { 
          name: "1",
          disabled: false,
          active: true,
        },
        {
          name: "2",
          disabled: false,
          active: false,
        },
        {
          name: "3",
          disabled: false,
          active: false,
        },
      ],
      step: 1
    }
  },
  methods: {
    gotoStep(i) {
      this.step = i+1
    },
    stepNumberClasses(i) {
        return {
        "brown": this.step === i,
        "green": this.step > i,
      };
    },
  }
}
</script>

<style scoped>
span{
  padding-right: 0;
}
.d-stepper {
  padding-top: 40px;
}
.d-stepper .d-stepper-header {
  width: 600px;
  margin: 0 auto;
}
.step-number {
  background: #E9E9E9;
  border-radius: 50%;
  text-align: center;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: background 1s ease;
  z-index: 1;
  cursor: pointer;
}
.d-stepper .step-number-content {
  transition: all 0.5s ease;
  z-index: 2;
  width: 33.33%;
  float: left;
  text-align: center;
  position: relative;
}
.step-number.brown {
  color: #fff;
  background: rgb(172, 111, 36);
}
.step-number.green {
  color: #fff;
  background: rgb(172, 111, 36);
}
.step-number::after {
  content: '';
  position: absolute;
  background: #919191;
  display: block;
  width: 100%;
  height: 5px;
  top: 18px;
  left: 50%;
  z-index: -1;
}
.step-number.green::after{
  background: red;
  transition: background 1s ease-in-out;
}
.step-number-content:last-child .step-number::after{
  background: transparent;
}
</style>