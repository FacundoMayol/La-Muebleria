require('./bootstrap');

axios.defaults.headers.common['X-localization'] = 'es'

import Vue from 'vue'

import Notifications from 'vue-notification'

Vue.use(Notifications)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import router from './router/index.js'
import store from './store/index.js'

import App from './views/App'

var app = new Vue({
    el: '#app',
    components: {
        App
    },
    store,
    router
})