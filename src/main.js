import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEasyLightbox from 'vue-easy-lightbox'
import vClickOutside from "click-outside-vue3"

const app = createApp(App);
app.use(router)
app.use(VueEasyLightbox)
app.use(vClickOutside)
app.mount('#app')

