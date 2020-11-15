<template>
    <div class="contents">   
        <notifications classes="messages" position="bottom left" group="messages"/>
        <Navbar/>
        <div class="flex flex-col flex-1">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './components/TheNavbar'
import Footer from './components/TheFooter'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>