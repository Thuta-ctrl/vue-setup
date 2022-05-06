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
import Dropdown from '@/pages/dropdown.vue'
import Modal from '@/pages/modal.vue'
import ChartJS from '@/pages/chartjs.vue'
import InfiniteScroll from '@/pages/infinitescroll.vue'
import Reaction from '@/pages/reaction.vue'
import Accordion from '@/pages/accordion.vue'
import Stepper from '@/pages/stepper.vue'
import ClickOutside from '@/pages/clickoutside.vue'
import Pagination from '@/pages/pagination.vue'

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
  { path: '/transition', component: Trans },
  { path: '/dropdown', component: Dropdown },
  { path: '/modal', component: Modal },
  { path: '/chart-js', component: ChartJS },
  { path: '/infinite-scroll', component: InfiniteScroll },
  { path: '/reaction', component: Reaction },
  { path: '/accordion', component: Accordion },
  { path: '/stepper', component: Stepper },
  { path: '/click-outside', component: ClickOutside },
  { path: '/pagination', component: Pagination }
]  

export default routes