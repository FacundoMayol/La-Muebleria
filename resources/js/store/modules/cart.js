const state = () => ({
    cartId: JSON.parse(localStorage.getItem('cart_id')) || null,
    cartKey: JSON.parse(localStorage.getItem('cart_key')) || null,
})

const getters = {
    hasCart(state){
        return state.cartId != null
    }
}

const actions = {
    async addToCart({
        dispatch,
        state,
        getters,
        commit
    }, { id, quantity }) {
        if(!getters.hasCart) await dispatch('createCart')
        const url = '/api/carts/'+state.cartId+'/items'
        try {
            await axios.post(url, {
                cart_key: state.cartKey,
                product_id: id,
                quantity: quantity?quantity:1
            })   
        } catch (e) {
            commit('removeCartId')
            commit('removeCartKey')
            throw e
        }
    },
    async removeFromCart({
        state,
    }, product) {
        const url = '/api/carts/'+state.cartId+'/items/'+product.id
        await axios.delete(url, {
            data: {
                cart_key: state.cartKey
            }
        })
    },
    async emptyCart({
        state,
    }) {
        const url = 'api/carts/'+state.cartId+'/items/'
        await axios.delete(url, {
            data: {
                cart_key: state.cartKey
            }
        })
    },
    async createCart({
        commit
    }){
        const data = (await axios.post('/api/carts')).data
        commit('setCartId', data.cart_id)
        commit('setCartKey', data.cart_key)
    },
    async retrieveProducts({
        getters,
        state
    }){
        if(!getters.hasCart) {
            return {
                data: [],
                total_cost: 0,
                total_items: 0
            }
        }
        return (await axios.get('/api/carts/'+state.cartId+'/items')).data
    }
}

const mutations = {
    setCartId(state, id) {
        state.cartId = id
        localStorage.setItem('cart_id', JSON.stringify(id))
    },
    setCartKey(state, key){
        state.cartKey = key
        localStorage.setItem('cart_key', JSON.stringify(key))
    },
    removeCartId(state) {
        state.cartId = null
        localStorage.removeItem('cart_id')
    },
    removeCartKey(state) {
        state.cartKey = null
        localStorage.removeItem('cart_key')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}