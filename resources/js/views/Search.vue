<template>
    <div>
        <TitleBanner>Búsqueda</TitleBanner>
        <div class="container mx-auto p-5">
            <div class="flex mb-3">
                <input v-model="search" class="flex-1 mx-2 p-2 bg-gray-100 border-gray-400 placeholder-gray-600 text-gray-700 rounded-md border" placeholder="Búsqueda">
            </div>
            <div>
                <h3 class="text-sm md:text-base font-bold uppercase tracking-tighter">
                    {{ loading?'Cargando...':(totalItems==0?'Sin productos encontrados':(totalItems==1?'1 producto encontrado':(totalItems + ' productos encontrados'))) }}
                </h3>
            </div>
            <hr class="border-gray-500 my-2">
            <transition name="fade" mode="out-in">
                <div :key="0" v-if="loading" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    <span class="spinner w-8 h-8 mx-2"></span>
                    Cargando
                </div>
                <div :key="1" v-else-if="error != ''" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    Error al obtener los productos de la base de datos: {{ error }}
                </div>
                <div :key="2" v-else-if="items.length == 0" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    No se encontraron productos que coincidan con tu busqueda
                </div>
                <div :key="3" v-else>
                    <div class="flex-col divide-y divide-gray-400">
                        <SearchRowItem v-for="(item, index) in items" :key="index" :to="{ name: 'product', params: { productId: item.id } }" :product="item" @add="addToCart(item)"/>
                    </div>
                    <div class="mt-4 flex justify-center items-center">
                        <PaginationItem v-model="page" :pages="nPages"/>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TitleBanner from './components/TheTitleBanner'
import SearchRowItem from './components/Search/SearchRow'
import PaginationItem from './components/ThePagination'

export default {
    props: {
        searchQuery: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            loading: false,
            search: this.$route.query.s,
            page: !isNaN(parseInt(this.$route.query.p, 10))?parseInt(this.$route.query.p, 10):0,
            nPages: 0,
            totalItems: 0,
            items: [],
            error: ''
        }
    },
    created () {
        this.fetchData()
        this.updateQueryDebounced = _.debounce(this.updateQuery, 500)
    },
    watch: {
        $route: function () {
            this.page = !isNaN(parseInt(this.$route.query.p, 10))?parseInt(this.$route.query.p, 10):0
            this.search = this.$route.query.s
            this.nPages = 0
            this.totalItems = 0
            this.items = []
            this.error = ''
            this.fetchData()
        },
        page: function () {
            this.updateQueryDebounced()
        },
        search: function () {
            if(this.$route.query.s !== this.search){
                this.updateQueryDebounced()
                this.page = 0
            }
        }
    },
    methods: {
        ...mapActions('cart', {
            addToCartAction: 'addToCart'
        }),
        updateQuery: function () {
            this.$router.push({ query: { s: this.search, p: this.page } })
        },
        fetchData: async function () {
            this.loading = true
            try {
                const data = (await axios.get('/api/products', {
                    params: {
                        s: this.searchQuery,
                        p: this.page
                    }
                })).data
                this.items = data['data']
                this.nPages = data['n_pages']
                this.totalItems = data['total']
            } catch(e) {
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.error = tempError + " (" + e.message + ")"
            } finally {
                this.loading = false
            }
        },
        addToCart: async function(product) {
            try{
                await this.addToCartAction(product)
                console.log("Producto añadido")
            }catch(e){
                console.log(e);
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.error = tempError + " (" + e.message + ")"
            }
        }
    },
    components: {
        TitleBanner,
        SearchRowItem,
        PaginationItem
    }
}
</script>