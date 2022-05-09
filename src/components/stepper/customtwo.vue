<template>
  <div class="container">
    <div class="d-stepper">
      <div class="d-stepper-header">
        <div
          class="step-number-content"
          v-for="(stepItem, i) in steps"
          :key="i"
        >
          <div
            class="step-number"
            @click="gotoStep(i+1)"
            :class="stepNumberClasses(i+1, stepItem)"
          >
            <i v-if="step > i+1">✔</i>
            <i v-else-if="step === i+1">{{ stepItem.name }}</i>
            <span v-else>{{ i + 1 }}</span>
          </div>
        </div>

      </div>
    
    </div>
    <div class="card">
      <div v-if="step < 5">
        <transition>
          <keep-alive>
            <component :is="component" :step="step" @upStep="gotoStep" @setDisabled="updateDisabled"></component>
          </keep-alive>
        </transition>
      </div>
      <div v-else>
        Success
      </div>
    </div>
  </div>
</template>

<script>
import OneComponent from '@/components/stepper/component/one.vue'
import TwoComponent from '@/components/stepper/component/two.vue'
import ThreeComponent from '@/components/stepper/component/three.vue'
import FourComponent from '@/components/stepper/component/four.vue'
export default {
  name: 'custom-stepper',
  components: {
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  },
  data() {
    return {
      component: 'OneComponent',
      steps: [
        { 
          name: "1",
          disabled: false,
          active: true,
        },
        {
          name: "2",
          disabled: true,
          active: false,
        },
        {
          name: "3",
          disabled: true,
          active: false,
        },
        {
          name: "4",
          disabled: true,
          active: false,
        },
      ],
      step: 1
    }
  },
  methods: {
    gotoStep(step) {
      this.step = step
      if (this.step == 1) {
        this.steps[0].disabled = false
        this.component = "OneComponent"
      }
      if (this.step == 2) {
        this.steps[0].disabled = false
        this.steps[1].disabled = false
        this.component = "TwoComponent"
      }
      if (this.step == 3) {
        this.steps[0].disabled = false
        this.steps[1].disabled = false
        this.steps[2].disabled = false
        this.component = "ThreeComponent"
      }
      if (this.step == 4) {
        this.steps[0].disabled = false
        this.steps[1].disabled = false
        this.steps[2].disabled = false
        this.steps[3].disabled = false
        this.component = "FourComponent"
      }
    },
    updateDisabled(payload) {
      payload.map(step => {
        this.steps[step].disabled = true
      })
    },
    stepNumberClasses(i, item) {
      return {
        "current": this.step === i,
        "done": this.step > i,
        "active": this.step == i+1,
        "disabled": item.disabled
      };
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1100px;
}
span{
  padding-right: 0;
}
.d-stepper {
  margin-top: 100px;
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
  width: 25%;
  float: left;
  text-align: center;
  position: relative;
}
.step-number.current {
  color: #fff;
  background: rgb(172, 111, 36);
}
.step-number.done {
  color: #fff;
  background: rgb(27, 173, 19);
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
.step-number.done::after{
  background: rgb(27, 173, 19);
  transition: background 1s ease-in-out;
}
.step-number-content:last-child .step-number::after{
  background: transparent;
}
.card {
  clear: both;
  background-color: wheat;
  width: 400px;
  padding: 10px;
  text-align: center;
  margin: 20px auto;
}
div.disabled {
  pointer-events: none;
  background: #CCC;
}
</style>