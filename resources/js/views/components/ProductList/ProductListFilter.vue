<template>
    <div class="flex items-baseline text-xs ml-2 mb-1">
        <span class="uppercase font-bold tracking-tighter mr-2">{{ category }}:</span>
        <button @click="$emit('close')" class="group px-2 border rounded-md bg-gray-100 border-gray-400 transition duration-300 ease-in-out hover:border-orange-400 focus:border-orange-400">{{ value }}<font-awesome-icon class="ml-2 text-sm transition duration-300 ease-in-out group-hover:text-orange-400 group-focus:text-orange-400" icon="times"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        value: String
    }
}
</script>