<template>
    <th @click="$emit('sort', !value)" :class="selected?'border-orange-500':''" class="px-2 py-1 group cursor-pointer border-b border-gray-500 hover:border-orange-500 select-none whitespace-no-wrap font-medium">
        <font-awesome-icon :class="{
            'text-orange-500': selected,
            'rotate-180': value
        }" class="group-hover:text-orange-500 group-focus:text-orange-500 transform transition-transform duration-300 ease-in-out mr-1" icon="angle-down"></font-awesome-icon>
        <slot></slot>
    </th>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>