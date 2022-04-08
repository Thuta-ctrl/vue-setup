<template>
  <div>
    <h1>Props</h1>
    <h5>Parentမှchildသို့ Dataများပိုပေးလိုသောအခါ props ကိုသုံးပါသည်။ <br/>
      ဥပမာတွင် propsemit.vue => parent မှ
      child.vue => childone သို့ nameကို ပေးပို့ထားပြီး <br/>
      childtwo.vue => childtwo သို့ ageကို ပေးပို့ထားပါသည်။
    </h5>
    <hr/>
    <h1>Emit</h1>
    <h5>childမှparentသို့ တစ်ခုခုလုပ်စေချင်သောအချိန်မျိုးတွင် emit ကိုသုံးပါသည်။ <br/>
      ဥပမာတွင် child.vue မှ name ကို ေပြာင်းစေလိုသောကြောင့် emit('change','kyaw kyaw')ဟူ ခေါ်ထားပါသည်။ <br/>
      change eventကို parent ပြန်ခေါ်လိုလျှင် (1)@change="(2)changeName" လို့ခေါ်သုံးရပါမည် <br>
      (1) childမှလာသော event နာမည်
      (2) parentမှ methodsထဲတွင်ခေါ်သုံးမည့် function name
    </h5>
    <hr/>
    <child-one
      :name="name"
      @change="changeName"
    ></child-one>
    <two
      :age="age"
      @update="ageUpdate"
    ></two>
  </div>
</template>

<script>
import ChildOne from '@/components/propsemits/child.vue'
import ChildTwo from '@/components/propsemits/childtwo.vue'
export default {
  name: 'props-emits-page',

  data() {
    return {
      name: 'Mg Ba',
      age: 10
    }
  },

  components: {
    ChildOne,
    'two': ChildTwo,
  },

  methods: {
    changeName(name) {
      this.name = name
    },
    ageUpdate(age) {
      this.age = age
    }
  }
}
</script>

<style>

</style>