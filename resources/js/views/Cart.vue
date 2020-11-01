<template>
    <div>
        <TitleBanner>Items en carrito</TitleBanner>
        <div class="container mx-auto p-5">
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
                        <CartRowItem v-for="(item, index) in items" :key="index" :to="{ name: 'product', params: { productId: item.id } }" :product="item" @remove="removeFromCart(item)"/>
                    </div>
                    <p class="text-center text-xl font-semibold">{{ totalCost }}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TitleBanner from './components/TheTitleBanner'
import CartRowItem from './components/Cart/CartRow'
import PaginationItem from './components/ThePagination'

export default {
    data () {
        return {
            loading: false,
            totalItems: 0,
            totalCost: 0,
            items: [],
            error: ''
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        ...mapActions('cart', {
            retrieveProducts: 'retrieveProducts',
            removeFromCartAction: 'removeFromCart'
        }),
        removeFromCart: async function (product) {
            try{
                await this.removeFromCartAction(product)
                console.log("Producto eliminado")
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
            this.fetchData()
        },
        fetchData: async function () {
            this.loading = true
            try{
                const items = await this.retrieveProducts()
                console.log(items);
                this.items = items.data
                this.totalItems = items.total_items
                this.totalCost = items.total_cost
            } catch (e) {
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
            } finally {
                this.loading = false
            }
        }
    },
    components: {
        TitleBanner,
        CartRowItem,
        PaginationItem
    }
}
</script>