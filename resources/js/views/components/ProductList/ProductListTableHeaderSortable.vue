<template>
    <th @click="handle" :class="selected?'border-orange-500':''" class="px-2 py-1 group cursor-pointer border-b border-gray-500 hover:border-orange-500 select-none whitespace-no-wrap font-medium">
        <font-awesome-icon :class="{
            'text-orange-500': selected,
            'rotate-180': !desc
        }" class="group-hover:text-orange-500 group-focus:text-orange-500 transform transition-transform duration-300 ease-in-out mr-1" icon="angle-down"></font-awesome-icon>
        <slot></slot>
    </th>
</template>

<script>
export default {
    props: {
        desc: {
            type: Boolean,
            default: true
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handle: function () {
            if(!this.selected) this.$emit('selected')
            else this.$emit('order')
        }
    }
}
</script>