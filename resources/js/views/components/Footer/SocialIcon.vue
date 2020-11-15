<template>
    <a class="text-opacity-75 hover:text-opacity-100 focus:text-opacity-100 transition duration-300 ease-in-out" :href="href">
        <font-awesome-icon 
        class="transition duration-300 ease-in-out"
        :icon="icon"
        size="lg">
        </font-awesome-icon>
    </a>
</template>

<script>
export default {
    props: ['icon', 'href']
}
</script>