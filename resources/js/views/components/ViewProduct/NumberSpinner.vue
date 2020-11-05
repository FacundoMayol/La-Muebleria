<template>
    <div class="flex flex-row">
        <span class="text-center align-middle px-2 py-1 text-orange-500 border-orange-500 border rounded-l-md">
            Añadir al carrito
        </span> 
        <button :disabled="value<=min" @click="decrement" class="text-center align-middle border-r border-t border-b handler px-2 py-1">
            <font-awesome-icon icon="chevron-down"></font-awesome-icon>
        </button>
        <input type="text" size="3" readonly class="text-gray-700 bg-white border-b border-t border-gray-500 px-2 py-1 text-center" :value="value">
        <button :disabled="max?value>=max:false" @click="increment" class="text-center align-middle border-l border-t border-b handler px-2 py-1">
            <font-awesome-icon icon="chevron-up"></font-awesome-icon>
        </button>
        <button @click="$emit('add')" class="text-center align-middle handler px-2 py-1 border rounded-r-md">
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: null
        },
        value: Number
    },
    methods: {
        decrement: function () {
            if(this.value>this.min)
                this.$emit('input', this.value-1)
        },
        increment: function () {
            if(!this.max||this.value<this.max)
                this.$emit('input', this.value+1)
        }
    }
}
</script>

<style lang="scss" scoped>
.handler {
    @apply text-orange-500 border-orange-500;
}

.handler:not(:disabled) {
    @apply transition duration-300 ease-in-out;
}

.handler:disabled {
    @apply text-gray-500 border-gray-500 cursor-not-allowed;
}

.handler:not(:disabled):hover,
.handler:not(:disabled):focus {
    @apply text-white bg-orange-500;
}
</style>