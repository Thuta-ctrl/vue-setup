<template>
  <div>
    <h3>Event Handling (click,dblclick,mouseover,mouseleave...)</h3>
    <h5>
      eventများကို methods: ထဲတွင်ရေးရမည်။ @click, @dblclick, @mouseover, @mouseleave, etc.
    </h5>

    <hr/>
    <p><i>@click event (၁ပေါင်း၁နုတ်)</i></p>
    <button @click="add($event, 1)">+</button>
    {{ count }}
    <button @click="minus($event, 1)">-</button>

    <hr/>
    <p><i>@dblclick event (၂ပေါင်း၂နုတ်)</i></p>
    <button @dblclick="add($event, 2)">+</button>
    {{ count }}
    <button @dblclick="minus($event, 2)">-</button>
  </div>
</template>

<script>
export default {
  name: 'event-page',

  data() {
    return {
      count: 0
    }
  },

  methods: {
    add(e, params) {
     this.count += params
    },

    minus(e, params) {
      this.count -= params
    }
  }
}
</script>

<style>

</style>