require('./bootstrap');

axios.defaults.headers.common['X-localization'] = 'es'

import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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