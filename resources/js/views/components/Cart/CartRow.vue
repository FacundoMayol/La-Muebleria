<template>
    <div class="p-2 flex flex-row items-center space-x-4 lg:space-x-6">
        <div class="text-center w-20 md:w-24 hover:relative hover:z-10 flex-shrink-0 rounded-sm border bg-white transition-transform duration-150 ease-in-out transform hover:scale-150 cursor-pointer">
            <!--template v-if="product.image">
                <img class="block w-full h-auto" :src="product.image"/>
            </template>
            <template v-else>
                <span>-</span>
            </template-->
            <img class="block w-full h-auto" src="/images/motherboard.png"/>
        </div>
        <div class="flex flex-grow flex-col lg:flex-row break-words lg:space-x-6 lg:items-center">
            <router-link :to="to" class="flex-grow font-semibold hover:text-orange-600 text-sm lg:text-base">{{ product.name }}</router-link>
            <span class="text-sm lg:text-right lg:w-56 lg:text-base font-medium">${{ product.price }}</span>
        </div>
        <button :disabled="disabled" @click="disabled?'':$emit('remove')" class="btn-solid btn-solid-orange px-2 whitespace-no-wrap text-sm md:text-base py-1 disabled:cursor-not-allowed"><font-awesome-icon icon="times-circle"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            validator: function (value) {
                return (!_.has(value, 'image') || (_.isString(value.image) || _.isNull(value.image))) && _.isString(value.price) && _.isString(value.name)
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