<template>
    <div class="contents">   
        <Navbar/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Navbar from './components/TheNavbar'

export default {
    components: {
        Navbar
    }
}
</script>