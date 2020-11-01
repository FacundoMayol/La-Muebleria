<template>
    <div>
        <TitleBanner>Gabinetes</TitleBanner>
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
                                <input v-model="loading" type="checkbox">
                                <span class="checkmark"></span>
                                Filtrado de compatibilidad
                            </label>
                        </div>
                    </div>
                    <div>
                        <CategoryItem title="Fabricantes y precio"/>
                        <CollapsibleItem title="Fabricantes" class="mb-2">
                            <MultipleChoiceItem :items.sync="manufacturer"/>
                        </CollapsibleItem>
                        <CollapsibleItem title="Precio" class="mb-2">
                            <SliderRangeItem prefix="$" v-bind.sync="price"/>
                        </CollapsibleItem>
                        <CategoryItem title="Filtros"/>
                        <CollapsibleItem title="Rating" class="mb-2">
                            <MultipleChoiceItem :items.sync="rating"/>
                        </CollapsibleItem>
                        <CollapsibleItem v-for="(filter, key) in filters" :key="key" :title="filter.title" class="mb-2">
                            <MultipleChoiceItem :items.sync="manufacturer"/>
                            <SliderRangeItem prefix="$" v-bind.sync="price"/>
                        </CollapsibleItem>
                    </div>
                </PopupOverlay>
            </div>
            <div class="lg:col-span-4 px-4 sm:px-0">
                <div class="flex items-baseline flex-wrap">
                    <span class="text-sm tracking-tight font-bold">Filtrado por:</span>
                    <FilterItem category="Marca" value="ASRock"/>
                </div>
                <div class="flex items-center">
                    <h3 class="flex-grow text-sm md:text-base font-bold uppercase tracking-tighter">{{ loading?'Cargando...':'30 productos encontrados' }}</h3>
                    <div class="flex items-center">
                        <font-awesome-icon class="mx-2" icon="search"></font-awesome-icon>
                        <input class="text-xs border rounded-md border-gray-500 placeholder-gray-500 text-gray-700 py-1 px-2" type="text" placeholder="Buscar en categoría">
                    </div>
                </div>
                <hr class="border-gray-500 my-2">
                <transition name="fade" mode="out-in">
                    <div :key="1" v-if="loading" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        <span class="spinner w-8 h-8 mx-2"></span>
                        Cargando
                    </div>
                    <div :key="2" v-else-if="items.length == 0" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                        No se encontraron productos que coincidan con tu busqueda
                    </div>
                    <div :key="3" v-else>
                        <div class="mt-4 max-w-full overflow-x-auto">
                            <table class="table-auto min-w-full">
                                <thead>
                                    <tr class="text-left text-sm">
                                        <TableHeaderItem class="text-center">Imágen</TableHeaderItem>
                                        <TableHeaderSortableItem v-for="(index, column) in columns" :key="index" v-model="column.state" :selected="column.selected">{{ column.title }}</TableHeaderSortableItem>
                                        <TableHeaderItem class="text-center">Acciones</TableHeaderItem>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRowItem v-for="item in items" :key="item.id" :to="{ name: 'product', params: { productId: item.id } }" @add="addToCart(item.id)" :disabled="item.stock == 0" :product="item.data"/>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-4 flex justify-center items-center">
                            <PaginationItem v-model="paginator.page" :pages="paginator.nPages"/>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
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
        query: Object
    },
    data () {
        return {
            showFilters: false,
            loading: true,
            paginator: {
                page: 0,
                nPages: 0
            },
            search: this.query.s?this.query.s:'',
            filters: {

            },
            items: []
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': this.fetchData()
    },
    methods: {
        fetchData: function () {
            x
        },
        updateQuery: _.debounce(function () {
            this.$route.push({ query: {

            } })
        }, 500),
        addToCart: function(productId) {
            console.log(productID);
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