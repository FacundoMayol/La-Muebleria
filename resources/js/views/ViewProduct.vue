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
            <div class="container mx-auto p-5 mt-2 lg:mt-5 break-all">
                <div class="grid lg:grid-cols-2 gap-x-12 gap-y-3">
                    <div class="flex flex-1">
                        <div class="w-3/12 lg:w-2/12 px-2 flex flex-col gap-y-2 justify-start items-center">
                            <div 
                            v-for="(image, index) in [product.thumbnail].concat(product.images)" :key="index"
                            @mouseenter="currentImg = image"
                            class="rounded-md p-1 border bg-gray-200 border-gray-300 hover:cursor-pointer flex justify-center items-center w-full h-auto">
                                <img :src="image" alt="Imágen del producto">
                            </div>
                        </div>
                        <div class="w-9/12 lg:w-10/12">
                            <img v-if="currentImg" class="object-contain object-center w-full" :src="currentImg" alt="Imágen del producto"/>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="space-y-1">
                            <h1 class="text-orange-500 text-center lg:text-left text-3xl lg:text-4xl font-semibold">{{ product.name }}</h1>
                            <p class="text-orange-500 lg:text-lg font-medium">${{ product.price }}</p>
                        </div>
                        <div class="flex flex-wrap whitespace-no-wrap items-center text-lg">
                            <span v-if="!product.user_rating" class="text-orange-400 lg:mr-1">Valoración de los usuarios:</span>
                            <span v-else class="text-orange-400 lg:mr-1">Valoración de su usuario:</span>
                            <span>
                                <template v-if="userRating">
                                    <span class="select-none text-xl text-orange-500" v-for="n in userRating" :key="n">★</span><span class="select-none text-xl text-orange-500" v-for="n in (5-userRating)" :key="n+userRating">☆</span><span class="ml-1 text-sm text-orange-400">({{ product.user_rating?product.user_rating:'0' }} <span class="text-orange-500">★</span>)</span><button @click="deleteRating" class="ml-1 text-blue-500 hover:text-blue-600 focus:text-blue-600 text-sm">Borrar reseña</button>
                                </template>
                                <template v-else-if="authenticated">
                                    <button class="text-xl text-orange-500 transform origin-bottom transition duration-200 ease-in-out hover:scale-125 focus:scale-125" v-for="n in rating" :key="n" @click="addRating(n)">★</button><button class="text-xl text-orange-500 transform origin-bottom transition duration-200 ease-in-out hover:scale-125 focus:scale-125" v-for="n in (5-rating)" :key="n+rating" @click="addRating(n+rating)">☆</button><span class="ml-1 text-sm text-orange-400">({{ product.rating?product.rating:'0' }}<span class="text-orange-500">★</span> x {{ product.n_users_rating }} usuarios)</span>
                                </template>
                                <template v-else>
                                    <span class="select-none text-xl text-orange-500" v-for="n in rating" :key="n">★</span><span class="select-none text-xl text-orange-500" v-for="n in (5-rating)" :key="n+rating">☆</span><span class="ml-1 text-sm text-orange-400">({{ product.rating?product.rating:'0' }} <span class="text-orange-500">★</span> x {{ product.n_users_rating }} usuarios)</span>
                                </template>
                            </span>
                        </div>
                        <p v-if="product.model" class="text-orange-400">Modelo: {{ product.model }}</p>
                        <p class="text-orange-400">Categoría: {{ product.category.name }}</p>
                        <p class="text-gray-800">{{ product.description }}</p>
                        <div class="flex flex-row justify-center items-center">
                            <NumberSpinnerItem @add="addToCart" :min="1" class="mr-1" v-model.number="quantity"/>
                        </div>
                        <div v-if="administrator" class="flex flex-row justify-center items-center space-x-2">
                            <button @click="remove()" class="btn-outlined btn-outlined-orange px-2 py-1"><font-awesome-icon icon="times"></font-awesome-icon> Eliminar</button>
                            <router-link :to="{ name: 'edit-product', params: {
                                productId: product.id
                            } }" v-if="administrator" class="inline-block btn-outlined btn-outlined-orange px-2 py-1"><font-awesome-icon icon="pencil-alt"></font-awesome-icon> Editar</router-link>
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
            quantity: 1,
            currentImg: null
        }
    },
    computed: {
        ...mapGetters('auth', [
            'authenticated',
            'administrator'
        ]),
        rating: function () {
            return this.product.rating?_.round(parseFloat(this.product.rating)):0
        },
        userRating: function () {
            return this.product.user_rating?_.round(parseFloat(this.product.user_rating)):0
        }
    },
    created () {
        var vm = this
        this.fetchData().then(function () {
            if(vm.product.name)
                document.title = vm.product.name + ' | La mueblería';
        })
    },
    watch: {
        $route: function () {
            this.product = null
            this.error = null
            this.quantity = 1
            this.currentImg = null
            var vm = this
            this.fetchData().then(function () {
                if(vm.product.name)
                    document.title = vm.product.name + ' | La mueblería';
            })
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
                this.currentImg = this.product.thumbnail
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
                document.title = 'Error al cargar producto | La mueblería';
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
        },
        remove: async function () {
            this.loading = true
            try {
                await axios.delete('/api/products/'+this.product.id)
                console.log("Producto eliminado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto eliminado exitosamente'
                });
                this.$router.push({ name: 'list', params: {
                    category: this.product.category
                }})
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
        }
    },
    components: {
        TitleBanner,
        NumberSpinnerItem
    }
}
</script>