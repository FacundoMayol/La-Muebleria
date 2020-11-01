<template>
    <tr class="even:bg-gray-200">
        <td class="p-2 text-center">
            <div v-if="product.image" class="w-12 mx-auto rounded-sm bg-white">
                <img class="block w-full h-auto" :src="product.image"/>
            </div>
            <template v-else>
                <span>-</span>
            </template>
        </td>
        <td class="p-2 text-center">
            <router-link :to="to" class="font-semibold whitespace-no-wrap hover:text-orange-600">{{ product.name }}</router-link>
        </td>
        <td class="p-2 align-middle" v-for="(value, key) in product.data" :key="key">
            {{ value }}
        </td>
        <td v-if="product.rating" class="p-2 text-center font-semibold text-orange-600">
            <span v-for="n in product.rating" :key="n">
                ★
            </span>
            <span v-for="n in (5-product.rating)" :key="n+product.rating">
                ☆
            </span>
        </td>
        <td class="p-2 text-center">
            <span class="font-medium">{{ product.price }}</span>
        </td>
        <td class="p-2 text-center">
            <button :disabled="disabled" @click="disabled?'':$emit('add')" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed"><font-awesome-icon icon="plus"></font-awesome-icon> Añadir</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            validator: function (value) {
                return (!_.has(value, 'image') || (_.isString(value.image) || _.isNull(value.image))) && (!_.has(value, 'rating') || (_.isNull(value.rating) || (_.isFinite(value.rating) && _.inRange(value.rating, 5))) && _.isString(value.price) && _.isString(value.name) && _.isObjectLike(value.data))  
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: string | Location,
            required: true
        }
    }
}
</script>