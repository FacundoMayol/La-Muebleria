require('./bootstrap');

import Vue from 'vue'

import router from './router.js'
import store from './store/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    store,
    router
})