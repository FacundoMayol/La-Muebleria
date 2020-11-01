import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart,
        auth
    }
})

export default store