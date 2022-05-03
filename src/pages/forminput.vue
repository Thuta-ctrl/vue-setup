<template>
  <div>
    <h1>Form Input Bindings</h1>
    <h5>formနှင့်ဆိုင်သော input fields, textareaတို့တွင် v-modelကိုသုံး၍ input valuesကို bindလုပ်နိုင်ပါသည် </h5>
    <hr/>
    <div class="myself">
      <div>
        <form @submit.prevent="submit">
          <div class="input">
            <label>Name: </label>
            <input v-model="name" />
          </div>

          <div class="input">
            <label>Email: </label>
            <input v-model="email" /><br/>
          </div>

          <div class="input">
            <label>Gender: </label>
            <input type="radio" v-model="gender" value="male"/>Male
            <input type="radio" v-model="gender" value="female"/>Female
          </div>

          <div class="input">
            <label>Slogan: </label>
            <textarea v-model="slogan"></textarea>
          </div>

          <div class="input">
            <label>Country: </label>
            <select v-model="country">
              <option v-for="(country,index) in countries" :key="index">
                {{ country }}
              </option>
            </select>
          </div>

          <button type="submit">submit</button>
        </form>
      </div>

      <div>
        <div v-if="name">My Name is {{ name }}.</div>
        <div v-if="email">My email is {{ name }}.</div>
        <div v-if="gender">My gender is {{ gender }}.</div>
        <div v-if="slogan">My slogan is {{ slogan }}.</div>
        <div v-if="country">My country is {{ country }}.</div>
      </div>
    </div>
    
    <div class="watchers">
      <h1>Watchers</h1>
      <h5></h5>
      <hr/>
      <div v-if="nameWatch"><b>Name Watcher</b>: {{ nameWatch }}</div>
      <div v-if="emailWatch"><b>Email Watcher</b>: {{ emailWatch }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-input',

  data() {
    return {
      name: '',
      email: '',
      gender: '',
      country: 'Myanmar',
      slogan: '',
      countries: ['Myanmar','Japan','English','Spain'],
      nameWatch: '',
      emailWatch: '',
    }
  },

  methods: {
    submit() {
      alert('hooyay@')
    },
    validEmail(val) {
      var re = /\S+@\S+\.\S+/;
        return re.test(val);
     }
  },

  watch: {
    name: function(newVal, oldVal) {
      this.nameWatch = `Hey your old name is ${oldVal} and your new name is ${newVal}`
    },
    email: function(val) {
      if (!this.validEmail(val)) {
        this.emailWatch = 'Hey enter valid name!'
      } else {
        this.emailWatch = ''
      }
    }
  },

  mounted() {
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
  .input {
    margin: 10px 3px;
  }
</style>