<template>
  <div>
    <h3>Class and Style Bindings</h3>

    <h4>(From data)</h4>
    <span :class="{ active: isActive, inactive: !isActive }">{{ text }}</span><br/>
    <button @click="active">Active</button>
    <button @click="inactive">Inactive</button>
    <br/>

    <h4>(From computed)</h4>
    <span class="object" :class="classObject">Hello. Now You See Me!</span><br/>
    <button @click="toggle">{{ showText }}</button>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'class-style',

  data() {
    return {
     text: 'Active',
     isActive: true,
     isShow: false,
     showText: 'Show Me',
    }
  },

  computed: {
    classObject() {
      return {
        'show': this.isShow,
        'hide': !this.isShow
      }
    }
  },

  methods: {
    active() {
      this.isActive = true
      this.text = 'Active'
    },
    inactive() {
      this.isActive = false
      this.text = 'Inactive'
    },
    toggle() {
      this.isShow = !this.isShow
      this.showText = this.isShow ? 'Hide Me!':'Show Me!'
    }
  }
}
</script>

<style scoped>
  .active {
    color: green;
  }

  .inactive {
    color: red;
  }

  .object.show {
    display: block;
  }
  .object.hide {
    display: none;
  }
</style>