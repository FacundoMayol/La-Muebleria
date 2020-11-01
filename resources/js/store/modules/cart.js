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
        getters
    }, product) {
        if(!getters.hasCart) await dispatch('createCart')
        const url = 'api/carts/'+state.cartId+'/items'
        await axios.post(url, {
            cart_key: state.cartKey,
            product_id: product.id,
            quantity: 1
        })
    },
    async removeFromCart({
        dispatch,
        state,
        getters
    }, product) {
        if(!getters.hasCart) await dispatch('createCart')
        const url = 'api/carts/'+state.cartId+'/items'
        await axios.delete(url, {
            cart_key: state.cartKey,
            product_id: product.id,
            quantity: 1
        })
    },
    async createCart({
        commit
    }){
        const data = (await axios.post('api/carts')).data
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
        return (await axios.get('api/carts/'+state.cartId+'/items', {
            params: {
                cart_key: state.cartKey
            }
        })).data
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}