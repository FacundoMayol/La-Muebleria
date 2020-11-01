<template>
    <div>
        <TitleBanner>Productos</TitleBanner>
        <div class="container mx-auto mt-10 flex flex-row justify-center md:justify-evenly flex-wrap">
            <ProductItem product="case" title="Gabinetes" image="/images/case.png"></ProductItem>
            <ProductItem product="CPU" title="CPUs" image="/images/CPU.png"></ProductItem>
            <ProductItem product="GPU" title="GPUs" image="/images/GPU.png"></ProductItem>
            <ProductItem product="motherboard" title="Placas madre" image="/images/motherboard.png"></ProductItem>
            <ProductItem product="RAM" title="Memorias RAM" image="/images/RAM.png"></ProductItem>
            <ProductItem product="storage" title="Unidades de almacenamiento" image="/images/SSD.png"></ProductItem>
            <ProductItem product="PSU" title="Fuentes de alimentación" image="/images/PSU.png"></ProductItem>
            <ProductItem product="cooler" title="Refrigeración" image="/images/cooler.png"></ProductItem>
        </div>
        <h2 class="mt-10 text-4xl text-orange-500 font-semibold text-center">Otros componentes</h2>
        <div class="container mx-auto mt-10">
            
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