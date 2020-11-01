<template>
    <div>
        <h3 class="font-bold uppercase tracking-tighter">{{ title }}</h3>
        <hr class="border-gray-500 my-2">
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>