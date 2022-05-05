import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEasyLightbox from 'vue-easy-lightbox'
import vClickOutside from "click-outside-vue3"

const app = createApp(App);
app.use(router)
app.use(VueEasyLightbox)
app.use(vClickOutside)
app.directive("click-outside-custom", {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
})
app.mount('#app')

