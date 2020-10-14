<template>
    <nav role="navigation" class="sticky top-0 flex items-center justify-between flex-wrap shadow-md bg-orange-600 px-4 py-2 z-50">
        <router-link to="/" class="group flex items-center justify-between mr-4">
            <img class="w-10 h-10 mr-1" src="/storage/icon.png" alt="brand"/><h1 class="text-white text-opacity-75 group-hover:text-opacity-100 transition duration-300 ease-in-out text-xl">KukuraGaming</h1>
        </router-link>
        <div class="lg:hidden">
            <button @click="hide = !hide" class="flex items-center px-3 py-2 border rounded text-white 
            border-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                <font-awesome-icon icon="bars"></font-awesome-icon>
            </button>
        </div>
        <div :class="{ hidden: hide }" class="w-full flex-grow lg:flex lg:items-center lg:w-auto text-md">
            <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white text-opacity-75 focus:text-opacity-100 hover:text-opacity-100 transition duration-300 ease-in-out mr-3 align-middle" to="/404">404</router-link>
            
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            hide: true
        }
    }
}
</script>