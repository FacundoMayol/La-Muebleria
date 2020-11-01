<template>
    <div :class="show?'block':'hidden'" class="lg:block bg-white lg:bg-transparent fixed lg:static inset-0 lg:inset-auto overflow-y-auto lg:overflow-y-visible z-50 lg:z-auto">
        <div class="lg:hidden w-full py-2 px-4 bg-orange-600 flex justify-between">
            <router-link :to="{ name: 'main'}" class="group flex items-center justify-between mr-4">
                <img class="w-10 h-10 mr-1" src="/images/icon.png" alt="brand"/><h1 class="text-white text-opacity-75 group-hover:text-opacity-100 transition duration-300 ease-in-out text-xl">KakeraGaming</h1>
            </router-link>
            <button @click="$emit('update:show', !show)" class="text-xl font-semibold text-white transform hover:scale-125 focus:scale-125 transition-transform duration-300 ease-in-out"><font-awesome-icon icon="times"></font-awesome-icon></button>
        </div>
        <div class="w-full max-w-full break-all p-5 lg:p-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        show: {
            inmediate: true,
            handler: function (value) {
                document.body.classList.toggle('nooverflow', value);
            }
        }
    },
}
</script>

<style lang="scss">
body.nooverflow {
    @apply overflow-hidden;
}
@media (min-width: 1024px) {
    body.nooverflow {
        @apply overflow-auto;
    }
}
</style>