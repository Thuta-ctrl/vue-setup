<template>
  <div>
    Step One
    <form @submit.prevent="submit()">
      <div class="input">
        <label for="name">Name: </label>
        <input v-model="name" @input="nameValidate">
        <div class="error" v-if="errors.name">{{ errors.name }}</div>
      </div>

      <div class="input">
        <label for="email">Email: </label>
        <input v-model="email" @input="emailValidate">
        <div class="error" v-if="errors.email">{{ errors.email }}</div>
      </div>

      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      require: true
    }
  },
  emits: ['upStep','setDisabled'],
  name: 'one-component',
  data() {
    return {
      name: '',
      email: '',
      errors: {}
    }
  },
  methods: {
    submit() {
      this.nameValidate()
      this.emailValidate()
      if (Object.keys(this.errors).length < 1) {
        this.$emit('upStep', this.step+1)
      } else {
        this.$emit('setDisabled', [1,2,3])
      }
    },
    nameValidate() {
      if (!this.name) {
        this.errors['name'] = 'This field is required'
      } else {
        delete this.errors['name']
      }
    },
    emailValidate() {
      if (!this.email) {
        this.errors['email'] = 'This field is required'
      } else {
        delete this.errors['email']
      }
    }
  }
}
</script>

<style scoped>
.input {
  margin: 10px;
}
.error {
  font-size: 12px;
  color: red;
  margin-left: 10px;
}
</style>