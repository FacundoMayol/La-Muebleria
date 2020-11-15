<template>
    <footer class="bg-orange-500 text-white">
        <div class="container mx-auto p-2 flex flex-col lg:justify-between lg:flex-row space-y-2 lg:space-y-0">
            <div class="text-center lg:text-left">
                <p><span class="font-semibold">La mueblería</span><span class="font-light">®</span> - <span class="font-light text-sm"> Creado por Farias Bruno, Mayol Facundo, Muñoz Facundo y Steiervalt Bruno</span></p>
            </div>
            <div class="flex items-center justify-center space-x-2">
                <SocialIcon :icon="['fab', 'instagram']" href="https://www.instagram.com/lamuebleria_ffbb/?hl=es-la" id="instagram-b"/>
                <SocialIcon :icon="['fab', 'facebook-f']" href="https://www.instagram.com/lamuebleria_ffbb/?hl=es-la" id="facebook-b"/>
                <SocialIcon :icon="['fab', 'twitter']" href="https://www.instagram.com/lamuebleria_ffbb/?hl=es-la" id="twitter-b"/>
            </div>
        </div>
    </footer>
</template>

<script>
import SocialIcon from './Footer/SocialIcon'

export default {
    components: {
        SocialIcon
    }
}
</script>

<style lang="scss" scoped>
#instagram-b {
    @apply text-white;

    :focus, :hover{
        color: #e1306c;
    }
}

#facebook-b {
    @apply text-white;

    :focus, :hover {
        color: #3b5998;
    }
}

#twitter-b {
    @apply text-white;

    :focus, :hover {
        color: #1da1f2;
    }
}
</style>