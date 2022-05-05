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
          <i v-else-if="step === i+1">Active</i>
          <span v-else>{{ i + 1 }}</span>
        </div>
        <div class="small">{{ stepItem.name }}</div>
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
          name: "One",
          desc:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "fas fa-car",
          disabled: false,
          active: true,
        },
        {
          name: "Two",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          disabled: false,
          active: false,
        },
        {
          name: "Three",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: "fas fa-check",
          disabled: false,
          active: false,
          confirm: "Enviar formluario"
        }
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
.d-stepper {
  padding-top: 40px;
}
.d-stepper .d-stepper-header {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-around;
}

.step-number {
  background: #E9E9E9;
  border-radius: 50%;
  text-align: center;
  height: 40px;
  position: relative;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: background-color 1s ease;
}

.d-stepper .step-number-content {
  transition: all 0.5s ease;
  z-index: 2;
  width: 68px;
  text-align: center;
}

.d-stepper .step-number-content div {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.d-stepper .step-number-content.active {
  transform: scale(1.25);
}
.step-number.brown {
  background-color: rgb(172, 111, 36);
}
.step-number.green {
  background-color: rgb(134, 216, 10);
}
.step-number.green::after {
  content: '';
  position: absolute;
  background: black;
  display: block;
  width: 100%;
  height: 5px;
  top: 30px;
  left: 50%;
  z-index: 1;
}
</style>