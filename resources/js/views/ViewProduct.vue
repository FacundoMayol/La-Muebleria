<template>
    <div class="flex flex-1 flex-col">
        <TitleBanner>Ver producto</TitleBanner>
        <template v-if="error">
            <div class="flex flex-1 flex-col justify-center items-center">
                <h1 class="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">{{ error }}</h1>
            </div>
        </template>
        <template v-else-if="loading">
            <div class="flex flex-1 flex-col justify-center items-center">
                <span class="spinner w-12 h-12"></span>
            </div>
        </template>
        <template v-else>
            <div class="container mx-auto p-5 mt-5">
                <div class="grid lg:grid-cols-2 gap-x-12 gap-y-4">
                    <div class="flex flex-1 justify-center items-center">
                        <img class="w-full lg:max-w-lg h-auto" :src="'/storage/components/'+product.image" alt="Imágen del producto"/>
                    </div>
                    <div class="space-y-2">
                        <div class="space-y-1">
                            <h1 class="text-orange-500 text-center lg:text-left text-3xl lg:text-4xl font-semibold">{{ product.name }}</h1>
                            <span class="text-orange-500 text-center lg:text-left lg:text-lg font-medium">${{ product.price }}</span>
                        </div>
                        <div class="flex flex-col lg:flex-row items-center text-lg">
                            <span v-if="!userRating" class="text-orange-400 lg:mr-1">Valoración de los usuarios:</span>
                            <span v-else class="text-orange-400 lg:mr-1">Valoración de su usuario:</span>
                            <span>
                                <template v-if="userRating">
                                    <span class="select-none text-xl text-orange-500" v-for="n in userRating" :key="n">★</span><span class="select-none text-xl text-orange-500" v-for="n in (5-userRating)" :key="n+userRating">☆</span><span class="ml-1 text-sm text-orange-400">({{ userRating }} <span class="text-orange-500">★</span>)</span><button @click="deleteRating" class="ml-1 text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm">Borrar reseña</button>
                                </template>
                                <template v-else-if="authenticated">
                                    <button class="text-xl text-orange-500 transform origin-bottom transition duration-200 ease-in-out hover:scale-125 focus:scale-125" v-for="n in rating" :key="n" @click="addRating(n)">★</button><button class="text-xl text-orange-500 transform origin-bottom transition duration-200 ease-in-out hover:scale-125 focus:scale-125" v-for="n in (5-rating)" :key="n+rating" @click="addRating(n+rating)">☆</button><span class="ml-1 text-sm text-orange-400">({{ this.product.rating }}<span class="text-orange-500">★</span> x {{ product.n_users_rating }} usuarios)</span>
                                </template>
                                <template v-else>
                                    <span class="select-none text-xl text-orange-500" v-for="n in rating" :key="n">★</span><span class="select-none text-xl text-orange-500" v-for="n in (5-rating)" :key="n+rating">☆</span><span class="ml-1 text-sm text-orange-400">({{ this.product.rating }} <span class="text-orange-500">★</span> x {{ product.n_users_rating }} usuarios)</span>
                                </template>
                            </span>
                        </div>
                        <p class="text-orange-400">Marca: {{ product.manufacturer.name }}<template v-if="product.model"> - Modelo: {{ product.model }}</template></p>
                        <p class="text-gray-800">{{ product.description }}</p>
                        <div class="flex flex-row justify-center items-center">
                            <NumberSpinnerItem @add="addToCart" :min="1" class="mr-1" v-model.number="quantity"/>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TitleBanner from './components/TheTitleBanner'
import NumberSpinnerItem from './components/ViewProduct/ViewProductNumberSpinner'

export default {
    props: {
        productId: {
            type: String | Number,
            validator: function (value) {
                return !isNaN(value) && !isNaN(parseInt(value))
            }
        }
    },
    data() {
        return {
            loading: false,
            product: null,
            error: null,
            quantity: 1
        }
    },
    computed: {
        ...mapGetters('auth', [
            'authenticated'
        ]),
        rating: function () {
            return this.product.rating?_.round(parseFloat(this.product.rating)):0
        },
        userRating: function () {
            return this.product.user_rating?_.round(parseFloat(this.product.user_rating)):null
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        $route: function () {
            this.error = null
            this.fetchData()
        }
    },
    methods: {
        ...mapActions('cart', {
            addToCartAction: 'addToCart'
        }),
        fetchData: async function () {
            this.loading = true
            try {
                const data = (await axios.get('/api/products/'+this.productId)).data.data
                this.product = data
                document.title = data.name + ' | KakeraGaming';
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
                document.title = 'Error al cargar producto | KakeraGaming';
            } finally {
                this.loading = false
            }
        },
        addRating: async function (rating) {
            try {
                await axios.post('/api/user/ratings/'+this.productId, {
                    'rating': rating
                })
                this.product.user_rating = rating.toString()
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Reseña agregada correctamente'
                })
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
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                })
            }
        },
        deleteRating: async function () {
            try {
                await axios.delete('/api/user/ratings/'+this.productId)
                this.product.user_rating = null
                const data = (await axios.get('/api/ratings/'+this.productId)).data
                this.product.rating = data.rating
                this.product.n_users_rating = data.n_users_rating
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Reseña eliminada correctamente'
                })
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
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                })
            }
        },
        addToCart: async function() {
            try{
                await this.addToCartAction({id: this.productId, quantity: this.quantity})
                console.log("Producto añadido")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto añadido exitosamente'
                });
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
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                });
            }
        }
    },
    components: {
        TitleBanner,
        NumberSpinnerItem
    }
}
</script>