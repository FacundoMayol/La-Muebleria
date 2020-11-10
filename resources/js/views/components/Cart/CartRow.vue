<template>
    <div class="p-2 flex flex-row items-center space-x-4 lg:space-x-6">
        <div class="text-center w-20 md:w-24 hover:relative hover:z-10 flex-shrink-0 rounded-sm border bg-white transition-transform duration-150 ease-in-out transform hover:scale-150 cursor-pointer">
            <template v-if="value.product.thumbnail">
                <img class="block w-full h-auto" :src="'/storage/products/'+value.product.thumbnail"/>
            </template>
            <template v-else>
                <span>-</span>
            </template>
        </div>
        <div class="flex flex-grow flex-col lg:flex-row break-words lg:space-x-6 lg:items-center">
            <div class="flex-grow text-sm lg:text-base">
                <span>{{ value.quantity }} x </span>
                <router-link :to="to" class="font-semibold hover:text-orange-600">{{ value.product.name }}</router-link>
            </div>
            <span class="text-sm lg:text-right lg:w-56 lg:text-base font-medium">${{ value.product.price }}</span>
        </div>
        <button :disabled="disabled" @click="disabled?'':$emit('remove')" class="mx-4 text-orange-400 text-3xl disabled:cursor-not-allowed"><font-awesome-icon icon="times"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            validator: function (value) {
                const product = value.product
                return (!_.has(product, 'thumbnail') || (_.isString(product.thumbnail) || _.isNull(product.thumbnail))) && _.isString(product.price) && _.isString(product.name) && (!isNaN(value.quantity) && !isNaN(parseInt(value.quantity)))
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: String | Object,
            required: true
        }
    }
}
</script>