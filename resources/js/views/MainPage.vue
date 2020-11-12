<template>
    <main class="flex-1 flex flex-col justify-center items-center container mx-auto px-8 py-6">
        <div class="grid lg:grid-cols-2">
            <div class="flex justify-center items-center lg:order-1">
                <Logo class="text-orange-600 fill-current stroke-current w-8/12 h-auto"/>
            </div>
            <div class="flex flex-col justify-center items-center lg:items-start">
                <h1 class="text-5xl lg:text-6xl font-bold text-orange-500 text-center lg:text-left">La mueblería</h1>
                <p class="text-lg font-light tracking-tight text-center lg:text-left">Fábrica de muebles</p>
                <div class="flex justify-center lg:justify-start items-center mx-auto lg:mx-0 mt-4">
                    <router-link class="btn-outlined btn-outlined-orange p-2 mr-2" :to="{ name: 'categories' }">Explorar productos</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Logo from './components/Logo'

export default {
    components: {
        Logo
    }
}
</script>