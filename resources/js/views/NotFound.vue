<template>
    <div class="flex flex-1 flex-col justify-center items-center">
        <h1 class="text-center text-2xl sm:text-4xl lg:text-5xl font-semibold text-orange-500">Lo sentimos</h1>
        <p class="text-center text-base sm:text-xl lg:text-2xl tracking-tight font-light">El recurso solicitado no pudo ser encontrado</p>
        <button @click="back" class="btn-outlined btn-outlined-orange p-2 mt-2">Volver atrás</button>
    </div>
</template>

<script>
export default {
    methods: {
        back: function () {
            this.$router.go(-1);
        }
    }
}
</script>