<template>
    <router-link class="group relative h-40 w-40 flex p-5 m-4 justify-center items-center border hover:border-orange-600 focus:border-orange-600 transition duration-500 ease-in-out" :to="{ name: 'list', params: { category: product } }">
        <img class="flex-1 object-center object-scale-down" :src="image" alt="product"/>
        <div class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 absolute inset-0 bg-orange-600 transition duration-500 ease-in-out flex justify-center items-center">
            <span class="text-white text-xl font-medium text-center align-middle">{{ title }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        product: String,
        title: String,
        image: String
    }
}
</script>