import axios from 'axios'

const state = {
    user: null
}

const getters = {
    authenticated(state) {
        return state.user != null
    }
}

const mutations = {
    setUser(state, value) {
        state.user = value
    }
}

const actions = {
    async logIn({
        dispatch
    }, credentials) {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/api/auth/login', credentials)

        return dispatch('me')
    },

    async logOut({
        commit
    }) {
        await axios.post('/api/auth/logout')
        commit('setUser', null)
    },

    async me({
        commit
    }) {
        try{
            commit('setUser', (await axios.get('/api/auth/user')).data)
        } catch {
            commit('setUser', null)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}