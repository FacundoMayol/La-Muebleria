<template>
    <div>
        <main class="container mx-auto px-8 lg:py-48">
            <div class="flex flex-col justify-center items-center lg:items-start">
                <h1 class="text-5xl lg:text-6xl font-bold text-orange-500 text-center lg:text-left">KukuraGaming</h1>
                <p class="text-lg font-light tracking-tight text-center lg:text-left">Sitio de venta y armado de computadoras</p>
                <div class="flex justify-center lg:justify-start items-center mx-auto lg:mx-0 mt-4">
                    <router-link class="btn-outlined btn-outlined-orange p-2 mr-2" :to="{ name: 'build' }">Armar un equipo</router-link>
                    <router-link class="btn-outlined btn-outlined-orange p-2 mr-2" :to="{ name: 'categories' }">Explorar componentes</router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
}
</script>