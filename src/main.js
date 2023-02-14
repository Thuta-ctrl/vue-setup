import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEasyLightbox from 'vue-easy-lightbox'
import vClickOutside from "click-outside-vue3"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import { SetupCalendar } from 'v-calendar';
import { createHead } from '@vueuse/head'

library.add(faUserSecret)

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(store)
app.use(SetupCalendar, {})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueEasyLightbox)
app.use(vClickOutside)
app.use(head)
app.mount('#app')

