<template>
    <header class="sticky top-0 shadow-md z-50">
        <nav role="navigation"  class="bg-orange-600 px-4 py-2 flex items-center justify-between flex-wrap">
            <router-link :to="{ name: 'main' }" class="group flex items-center justify-between mr-4">
                <Logo class="text-white text-opacity-75 group-hover:text-opacity-100 fill-current stroke-current w-10 h-10 mr-1 transform group-hover:rotate-45 transition duration-300 ease-in-out"/><h1 class="text-white text-opacity-75 group-hover:text-opacity-100 transition duration-300 ease-in-out text-xl">La mueblería</h1>
            </router-link>
            <div class="lg:hidden">
                <button @click="hideNav = !hideNav" class="flex items-center px-3 py-2 border rounded text-white 
                border-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                    <font-awesome-icon icon="bars"></font-awesome-icon>
                </button>
            </div>
            <div :class="{ hidden: hideNav }" class="w-full flex-grow lg:flex lg:items-center lg:w-auto text-md">
                <div class="flex-grow">
                    <router-link class="navbar-link" :to="{ name: 'main' }">Página principal</router-link>
                    <router-link class="navbar-link" :to="{ name: 'categories' }">Productos</router-link>
                    <router-link class="navbar-link" :to="{ name: 'contact' }">Contacto</router-link>
                    <template v-if="administrator">
                        <router-link class="navbar-link" :to="{ name: 'admin-contact' }">Administrar mensajes</router-link>
                    </template>
                </div>
                <div>
                    <template v-if="authenticated">
                        <span class="navbar-text">Usuario: {{ user.name }}</span>
                        <button class="navbar-link" @click="logOut">Cerrar sesión</button>
                    </template>
                    <template v-else>
                        <router-link class="navbar-link" :to="{ name: 'signup' }">Registrarse</router-link>
                        <router-link class="navbar-link" :to="{ name: 'login' }">Iniciar sesión</router-link>
                    </template>
                    <router-link class="navbar-link text-lg" :to="{ name: 'cart' }"><font-awesome-icon icon="shopping-cart"></font-awesome-icon></router-link>
                </div>
                <form class="flex justify-center items-center mt-4 lg:mt-0">
                    <button @click.prevent="goSearch" class="bg-white text-opacity-75 hover:text-opacity-100 text-orange-600 transition duration-300 ease-in-out border border-gray-200  rounded-l-md p-2"><font-awesome-icon icon="search"></font-awesome-icon></button>
                    <input v-model="search" class="flex-grow lg:flex-grow-0 bg-white placeholder-gray-600 rounded-r-md border border-gray-200 text-gray-700 p-2" placeholder="Buscar productos"/>
                </form>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Logo from './Logo'

export default {
    data () {
        return {
            hideNav: true,
            search: ''
        }
    },
    computed: {
        ...mapGetters('auth', [
            'authenticated',
            'administrator'
        ]),
        ...mapState('auth', [
            'user'
        ])
    },
    methods: {
        ...mapActions('auth', {
            logOutAction: 'logOut'
        }),
        goSearch: function () {
            if(this.$route.name !== 'search' || this.$route.query.s !== this.search)
                this.$router.push({ name: 'search', query: { s: this.search } })
        },
        logOut: async function () {
            try {
                await this.logOutAction()
                if(this.$router.currentRoute.name != 'main')
                    this.$router.push({ name: 'main' })
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Cierre de sesión exitoso'
                })
            } catch (e) {
                console.log(e);
                var tempError = ""
                if (e.request) {
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
        }
    },
    components: {
        Logo
    }
}
</script>