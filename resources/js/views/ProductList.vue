<template>
    <div>
        <TitleBanner>{{ title?title:'Ver categoría' }}</TitleBanner>
        <div class="container mx-auto my-5 lg:my-8 grid gap-5 lg:gap-8 grid-cols-1 lg:grid-cols-5">
            <div>
                <div class="container lg:max-w-none mx-auto flex px-4 lg:hidden">
                    <button @click="showFilters = !showFilters" class="btn-outlined btn-outlined-orange font-semibold flex-1 py-1">Filtros</button>
                </div>
                <PopupOverlay :show.sync="showFilters">
                    <!--div class="border border-gray-400 rounded-md p-5 mb-3">
                        <router-link :to="{ name: 'build' }" class="block font-semibold text-orange-500 text-center">Build actual</router-link>
                        <hr class="border-gray-400 my-3"/>
                        <div class="flex flex-wrap leading-tight">
                            <div class="mr-3 mb-2"><span class="text-xs font-medium">Partes</span><br><span class="font-semibold text-orange-500">123</span></div>
                            <div class="mr-3 mb-2"><span class="text-xs font-medium">Total</span><br><span class="font-semibold text-orange-500">123</span></div>
                            <div class="mr-3 mb-2"><span class="text-xs font-medium">Wattage aproximado</span><br><span class="font-semibold text-orange-500">123</span></div>
                        </div>
                        <div class="text-sm text-gray-600">
                            <label class="checkbox justify-center lg:justify-start">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                Filtrado de compatibilidad
                            </label>
                        </div>
                    </div-->
                    <div>
                        <CategoryItem title="Filtros"/>
                        <CollapsibleItem title="Precio" class="mb-2">
                            <SliderRangeItem prefix="$" :disabled="loading" :max="maxPrice" :start.sync="priceStartC" :end.sync="priceEndC"/>
                        </CollapsibleItem>
                        <CollapsibleItem title="Rating" class="mb-2">
                            <SliderRangeItem suffix="★" :disabled="loading" :max="5" :start.sync="ratingStartC" :end.sync="ratingEndC"/>
                        </CollapsibleItem>
                    </div>
                </PopupOverlay>
            </div>
            <div class="lg:col-span-4 px-4 sm:px-0">
                <div v-if="administrator" class="flex flex-row justify-start items-center mb-2">
                    <router-link :to="{ name: 'add-product' }" class="inline-block btn-outlined btn-outlined-orange px-2 py-1 text-sm"><font-awesome-icon icon="plus"></font-awesome-icon> Añadir producto</router-link>
                </div>
                <div class="flex items-baseline flex-wrap" v-if="filtered">
                    <span class="text-sm tracking-tight font-bold">Filtrado por:</span>
                    <FilterItem v-if="searchQuery" @close="searchC=''" category="Búsqueda">
                        {{ searchQuery }}
                    </FilterItem>
                    <FilterItem v-if="sortQuery" @close="sortC=null" category="Ordenar por">
                        {{ sortQuery }}
                    </FilterItem>
                    <FilterItem v-if="sortQuery&&sortDescQuery" @close="sortDescQuery=false" category="Ordenar en descenso">
                        <span v-if="sortDescC">Sí</span>
                        <span v-else>No</span>
                    </FilterItem>
                    <FilterItem v-if="priceStartQuery" @close="priceStartC=null" category="Precio mínimo">
                        {{ priceStartQuery }}
                    </FilterItem>
                    <FilterItem v-if="priceEndQuery" @close="priceEndC=null" category="Precio máximo">
                        {{ priceEndC }}
                    </FilterItem>
                    <FilterItem v-if="ratingStartQuery" @close="ratingStartC=null" category="Reseña mínima">
                        {{ ratingStartQuery }} Estrellas
                    </FilterItem>
                    <FilterItem v-if="ratingEndQuery" @close="ratingEndC=null" category="Reseña máxima">
                        {{ ratingEndC }} Estrellas
                    </FilterItem>
                </div>
                <div class="flex items-center">
                    <h3 class="flex-grow text-sm md:text-base font-bold uppercase tracking-tighter">
                        {{ loading?'Cargando...':(totalItems==0?'Sin productos encontrados':(totalItems==1?'1 producto encontrado':(totalItems + ' productos encontrados'))) }}
                    </h3>
                    <div class="flex items-center">
                        <font-awesome-icon class="mx-2" icon="search"></font-awesome-icon>
                        <input class="text-xs border rounded-md border-gray-500 placeholder-gray-500 text-gray-700 py-1 px-2" type="text" v-model="searchC" placeholder="Buscar en categoría">
                    </div>
                </div>
                <hr class="border-gray-500 my-2">
                <transition name="fade" mode="out-in">
                    <div :key="1" v-if="loading" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        <span class="spinner w-8 h-8 mx-2"></span>
                        Cargando
                    </div>
                    <div :key="2" v-else-if="totalItems == 0" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        No se encontraron productos que coincidan con tu busqueda
                    </div>
                    <div :key="3" v-else>
                        <div class="mt-4 max-w-full overflow-x-auto">
                            <table class="table-auto min-w-full">
                                <thead>
                                    <tr class="text-left text-sm">
                                        <TableHeaderItem class="text-center">Imágen</TableHeaderItem>
                                        <TableHeaderSortableItem 
                                        v-for="(column, index) in columns" 
                                        :key="index" 
                                        @selected="sortC=column.name"
                                        @order="sortDescC=!sortDescC" 
                                        :desc="sortC==column.name?sortDescC:true" 
                                        :selected="sortC==column.name">
                                            {{ column.title }}
                                        </TableHeaderSortableItem>
                                        <TableHeaderItem class="text-center">Acciones</TableHeaderItem>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRowItem v-for="item in items" :key="item.id" :to="{ name: 'product', params: { productId: item.id } }" @add="addToCart(item)" @remove="removeProduct(item)" :disabled="item.stock == 0" :product="item"/>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-4 flex justify-center items-center">
                            <PaginationItem v-model="pageC" :pages="nPages"/>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TitleBanner from './components/TheTitleBanner'
import PopupOverlay from './components/PopupOverlay'
import CollapsibleItem from './components/ProductList/ProductListCollapsible'
import CategoryItem from './components/ProductList/ProductListCategory'
import SliderRangeItem from './components/ProductList/ProductListSliderRange'
import MultipleChoiceItem from './components/ProductList/ProductListMultipleChoice'
import FilterItem from './components/ProductList/ProductListFilter'
import TableHeaderItem from './components/ProductList/ProductListTableHeader'
import TableHeaderSortableItem from './components/ProductList/ProductListTableHeaderSortable'
import TableRowItem from './components/ProductList/ProductListTableRow'
import PaginationItem from './components/ThePagination'

export default {
    props: {
        categoryParam: {
            type: String,
            default: null
        },
        searchQuery: {
            type: String,
            default: null
        },
        pageQuery: {
            type: Number,
            default: 0
        },
        sortQuery: {
            type: String,
            default: null
        },
        sortDescQuery: {
            type: Boolean,
            default: true
        },
        ratingStartQuery: {
            type: Number,
            default: null
        },
        ratingEndQuery: {
            type: Number,
            default: null
        },
        priceStartQuery: {
            type: Number,
            default: null
        },
        priceEndQuery: {
            type: Number,
            default: null
        }
    },
    data () {
        return {
            showFilters: false,
            loading: true,
            page: this.pageQuery,
            nPages: 0,
            search: this.searchQuery,
            items: [],
            totalItems: 0,
            error: null,
            sort: this.sortQuery,
            sortDesc: this.sortDescQuery,
            ratingStart: this.ratingStartQuery,
            ratingEnd: this.ratingEndQuery,
            priceStart: this.priceStartQuery,
            priceEnd: this.priceEndQuery,
            maxPrice: 100,
            columns: [
                {
                    title: 'Nombre',
                    name: 'name'
                },
                {
                    title: 'Precio',
                    name: 'price'
                },
                {
                    title: 'Rating',
                    name: 'rating'
                }
            ]
        }
    },
    computed: {
        ...mapGetters('auth', [
            'administrator'
        ]),
        title: function () {
            switch(this.categoryParam){
                case 'chairs':
                    return 'Sillas'
                case 'tables':
                    return 'Mesas'
                case 'desks': 
                    return 'Escritorios'
                case 'armchairs':
                    return 'Sillones' 
                case 'bookshelfs':
                    return 'Bibliotecas'
                default:
                    return 'Muebles'
            }
        },
        filtered: function () {
            return this.searchQuery||this.sortQuery||this.sortDescQuery||this.ratingStartQuery||this.ratingEndQuery||this.priceStartQuery||this.priceEndQuery
        },
        pageC: {
            get: function () {
                return this.page
            },
            set: function (newValue) {
                this.page = newValue
                this.updateQueryDebounced()
            }
        },
        searchC: {
            get: function () {
                return this.search
            },
            set: function (newValue) {
                this.search = newValue
                if(this.searchQuery !== newValue){
                    this.page = 0
                    this.updateQueryDebounced()
                }
            }
        },
        sortC: {
            get: function () {
                return this.sort
            },
            set: function (newValue) {
                this.sort = newValue
                this.sortDesc = true
                this.updateQueryDebounced()
            }
        },
        sortDescC: {
            get: function () {
                return this.sortDesc
            },
            set: function (newValue) {
                this.sortDesc = newValue
                this.updateQueryDebounced()
            }
        },
        ratingStartC: {
            get: function () {
                return this.ratingStart
            },
            set: function (newValue) {
                this.ratingStart = newValue
                if(this.ratingStartQuery != newValue && (this.ratingStartQuery != null || newValue != 0)){
                    this.page = 0
                    this.updateQueryDebounced()
                }
            }
        },
        ratingEndC: {
            get: function () {
                return this.ratingEnd
            },
            set: function (newValue) {
                this.ratingEnd = newValue
                if(this.ratingEndQuery != newValue && (this.ratingEndQuery != null || newValue != 5)){
                    this.page = 0
                    this.updateQueryDebounced()
                }
            }
        },
        priceStartC: {
            get: function () {
                return this.priceStart
            },
            set: function (newValue) {
                this.priceStart = newValue
                if(this.priceStartQuery != newValue && (this.priceEndQuery != null || newValue != 0)){
                    this.page = 0
                    this.updateQueryDebounced()
                }
            }
        },
        priceEndC: {
            get: function () {
                return this.priceEnd
            },
            set: function (newValue) {
                this.priceEnd = newValue
                if(this.priceEndQuery != newValue && (this.priceEndQuery != null || newValue != this.maxPrice)){
                    this.page = 0
                    this.updateQueryDebounced()
                }
            }
        }
    },
    created () {
        this.updateQueryDebounced = _.debounce(this.updateQuery, 500)
        this.fetchData()
        document.title = this.title + ' | La mueblería';
    },
    watch: {
        $route: function () {
            this.page = this.pageQuery
            this.nPages = 0
            this.search = this.searchQuery
            this.items = []
            this.totalItems = 0
            this.error = null
            this.sort = this.sortQuery,
            this.sortDesc = this.sortDescQuery,
            this.ratingStart = this.ratingStartQuery,
            this.ratingEnd = this.ratingEndQuery,
            this.priceStart = this.priceStartQuery,
            this.priceEnd = this.priceEndQuery,
            this.fetchData()
            document.title = this.title + ' | La mueblería';
        }
    },
    methods: {
        ...mapActions('cart', {
            addToCartAction: 'addToCart'
        }),
        updateQuery: function () {
            var query = {}
            if(this.search)
                query.s = this.search 
            if(this.page)
                query.p = this.page
            if(this.sort){
                query.sort = this.sort
                if(this.sortDesc)
                    query.sortd = this.sortDesc
            }
            if(this.ratingStart && this.ratingStart != 0)
                query.rating_start = this.ratingStart
            if(this.ratingEnd && this.ratingEnd != 5)
                query.rating_end = this.ratingEnd
            if(this.priceStart && this.priceStart != 0)
                query.price_start = this.priceStart
            if(this.priceEnd && this.priceEnd != this.maxPrice)
                query.price_end = this.priceEnd
            this.$router.push({ query })
        },
        fetchData: async function () {
            this.loading = true
            try {
                var params = {}
                if(this.search)
                    params.s = this.search 
                if(this.page)
                    params.p = this.page
                if(this.sort){
                    params.sort = this.sort
                    if(this.sortDesc)
                        params.sortd = this.sortDesc
                }
                if(this.ratingStart && this.ratingStart != 0)
                    params.rating_start = this.ratingStart
                if(this.ratingEnd && this.ratingEnd != 5)
                    params.rating_end = this.ratingEnd
                if(this.priceStart && this.priceStart != 0)
                    params.price_start = this.priceStart
                if(this.priceEnd && this.priceEnd != this.maxPrice)
                    params.price_end = this.priceEnd
                const data = (await axios.get('/api/category/'+this.categoryParam, {
                    params
                })).data
                this.items = data.data
                this.totalItems = data.total
                this.nPages = data.n_pages
                this.maxPrice = data.max_price?parseFloat(data.max_price):100
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
            if(!this.administrator){
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'No posee autorización para realizar tal operación'
                })
                return
            }
            try{
                await this.addToCartAction(product)
                console.log("Producto añadido")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto añadido exitosamente'
                })
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
                })
            }
        },
        removeProduct: async function (product) {
            this.loading = true
            try {
                await axios.delete('/api/products/'+product.id)
                console.log("Producto eliminado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Producto eliminado exitosamente'
                })
                this.fetchData()
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
        PopupOverlay,
        CollapsibleItem,
        CategoryItem,
        MultipleChoiceItem,
        SliderRangeItem,
        FilterItem,
        TableHeaderItem,
        TableHeaderSortableItem,
        TableRowItem,
        PaginationItem
    }
}
</script>