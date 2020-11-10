<template>
    <div>
        <TitleBanner>Productos</TitleBanner>
        <div class="container mx-auto mt-10 flex flex-row justify-center md:justify-evenly flex-wrap">
            <ProductItem product="chairs" title="Sillas" image="/images/chair.png"></ProductItem>
            <ProductItem product="tables" title="Mesas" image="/images/table.png"></ProductItem>
            <ProductItem product="desks" title="Escritorios" image="/images/desk.png"></ProductItem>
            <ProductItem product="armchairs" title="Sillones" image="/images/armchair.png"></ProductItem>
            <ProductItem product="bookshelfs" title="Bibliotecas" image="/images/bookshelf.png"></ProductItem>
        </div>
        <h2 class="mt-10 text-4xl text-orange-500 font-semibold text-center">Otros componentes</h2>
        <div class="container mx-auto my-10">
            <p class="text-orange-500 text-3xl font-semibold text-center">Proximamente</p>
        </div>
    </div>
</template>

<script>
import TitleBanner from './components/TheTitleBanner'
import ProductItem from './components/Categories/CategoriesBigButton'

export default {
    components: {
        ProductItem,
        TitleBanner
    }
}
</script>