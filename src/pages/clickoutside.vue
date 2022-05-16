<template>
  <div>
    <OnClickOutside @trigger="close" v-if="modal">
      <div>
        Click Outside of Me
      </div>
    </OnClickOutside>
    <div>
      <button @click="modal = !modal">Hello World</button>
    </div>
    <UseDark v-slot="{ isDark, toggleDark }">
      <button @click="toggleDark()">
        Is Dark: {{ isDark }}
      </button>
    </UseDark>
  </div>
</template>
<script>
import { OnClickOutside, UseDark } from '@vueuse/components'
import { ref } from '@vue/reactivity'

export default {
  name: 'click-outside',
  components: {
    OnClickOutside,
    UseDark
  },
  setup() {
    const modal = ref()
    const close = () => {
      modal.value = false
    }
    
    return {
      modal,
      close,
    }
  }
}
</script>


