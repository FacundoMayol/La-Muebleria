<template>
    <div>
        <TitleBanner>Ver categoría</TitleBanner>
        <div class="container mx-auto my-5 lg:my-8 grid gap-5 lg:gap-8 grid-cols-1 lg:grid-cols-5">
            <div>
                <div class="container lg:max-w-none mx-auto flex px-4 lg:hidden">
                    <button @click="showFilters = !showFilters" class="btn-outlined btn-outlined-orange font-semibold flex-1 py-1">Filtros</button>
                </div>
                <PopupOverlay :show.sync="showFilters">
                    <div class="border border-gray-400 rounded-md p-5 mb-3">
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
                    </div>
                    <div>
                        <!--CategoryItem title="Fabricantes y precio"/>
                        <CollapsibleItem title="Fabricantes" class="mb-2">
                            <MultipleChoiceItem :items.sync="manufacturer"/>
                        </CollapsibleItem>
                        <CollapsibleItem title="Precio" class="mb-2">
                            <SliderRangeItem prefix="$" v-bind.sync="price"/>
                        </CollapsibleItem>
                        <CategoryItem title="Filtros"/>
                        <CollapsibleItem title="Rating" class="mb-2">
                            <MultipleChoiceItem :items.sync="rating"/>
                        </CollapsibleItem-->
                    </div>
                </PopupOverlay>
            </div>
            <div class="lg:col-span-4 px-4 sm:px-0">
                <div class="flex items-baseline flex-wrap" v-if="filtered">
                    <span class="text-sm tracking-tight font-bold">Filtrado por:</span>
                    <FilterItem v-if="searchQuery" @close="searchC=''" category="Búsqueda" :value="search"/>
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
                                        @selected="selectSort(index)"
                                        @order="orderRows(index)" 
                                        :desc="sort==column.name?sortDesc:true" 
                                        :selected="sort==column.name">
                                            {{ column.title }}
                                        </TableHeaderSortableItem>
                                        <TableHeaderItem class="text-center">Acciones</TableHeaderItem>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRowItem v-for="item in items" :key="item.id" :to="{ name: 'product', params: { productId: item.id } }" @add="addToCart(item)" :disabled="item.stock == 0" :product="item"/>
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
import { mapActions } from 'vuex'

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
                    title: 'Fabricante',
                    name: 'manufacturer'
                },
                {
                    title: 'Rating',
                    name: 'rating'
                }
            ]
        }
    },
    computed: {
        filtered: function () {
            return this.searchQuery?true:false
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
        }
    },
    created () {
        this.fetchData()
        this.updateQueryDebounced = _.debounce(this.updateQuery, 500)
    },
    watch: {
        $route: function () {
            this.page = this.pageQuery
            this.nPages = 0
            this.search = this.searchQuery
            this.items = []
            this.totalItems = 0
            this.error = null
            this.fetchData()
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
            if(this.sort)
                query.sort = this.sort
            if(this.sortDesc)
                query.sortd = this.sortDesc
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
                if(this.sort)
                    params.sort = this.sort
                if(this.sortDesc)
                    params.sortd = this.sortDesc
                const data = (await axios.get('/api/products', {
                    params
                })).data
                this.items = data.data
                this.totalItems = data.total
                this.nPages = data.n_pages
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
        selectSort: function (column) {
            this.sort = this.columns[column].name
            this.sortDesc = true
            this.updateQueryDebounced()
        },
        orderRows: function (column) {
            this.sortDesc = !this.sortDesc
            this.updateQueryDebounced()
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