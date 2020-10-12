<template>
    <div>
        <navbar>
        </navbar>
        <h1 class="">Página principal - <font-awesome-icon icon="search"></font-awesome-icon> - bienvenido {{ name }}</h1>
        <input v-model="name" placeholder="Ingrese su nombre" type="text">
    </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    data () {
        return {
            name: ''
        }
    },
    components: {
        Navbar
    }
}
</script>