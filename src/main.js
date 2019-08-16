import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import SocialSharing from 'vue-social-sharing'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faSearch,
    faPlusCircle,
    faShareAltSquare
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faUserSecret, faSearch, faPlusCircle, faShareAltSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(SocialSharing)

new Vue(App).$mount('#app');