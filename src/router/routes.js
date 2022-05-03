import Event from '@/pages/event.vue'
import PropsEmits from '@/pages/propsemit.vue'
import Home from '@/pages/home.vue'
import rendering from '@/pages/rendering.vue'
import ClassStyle from '@/pages/classstyle.vue'
import FormInputs from '@/pages/forminput.vue'
import ProvideInject from '@/pages/provideinject.vue'
import Plugin from '@/pages/lightbox.vue'
import VueCli from '@/pages/vuecli.vue'
import Slot from '@/pages/slot.vue'
import Trans from '@/pages/transition.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/rendering', component: rendering },
  { path: '/event', component: Event },
  { path: '/props-emits', component: PropsEmits },
  { path: '/class-style', component: ClassStyle },
  { path: '/form-inputs', component: FormInputs },
  { path: '/provide-inject', component: ProvideInject },
  { path: '/plugin', component: Plugin },
  { path: '/vue-cli', component: VueCli },
  { path: '/slot', component: Slot },
  { path: '/transition', component: Trans }
]  

export default routes