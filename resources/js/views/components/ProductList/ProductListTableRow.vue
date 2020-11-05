<template>
    <tr class="even:bg-gray-200">
        <td class="p-3 flex justify-center items-center">
            <div class="w-12 sm:w-16 md:w-20 hover:relative hover:z-10 flex-shrink-0 rounded-sm border bg-white transition-transform duration-150 ease-in-out transform hover:scale-125 cursor-pointer p-1">
                <template v-if="product.image">
                    <img class="block w-full h-auto" :src="'/storage/components/'+product.image"/>
                </template>
                <template v-else>
                    <span>-</span>
                </template>
            </div>
        </td>
        <td class="p-2">
            <router-link :to="to" class="font-semibold whitespace-no-wrap hover:text-orange-600">{{ product.name }}</router-link>
        </td>
        <!--td class="p-2 align-middle" v-for="(value, key) in product.data" :key="key">
            {{ value }}
        </td-->
        <td class="p-2">
            <span class="font-medium">{{ product.price }}</span>
        </td>
        <td class="p-2">
            <span class="font-medium">{{ product.manufacturer.name }}</span>
        </td>
        <td class="p-2 text-orange-600 select-none">
            <span v-for="n in rating" :key="n">
                ★
            </span>
            <span v-for="n in (5-rating)" :key="n+rating">
                ☆
            </span>
        </td>
        <td class="p-2 text-center">
            <button :disabled="disabled" @click="disabled?'':$emit('add')" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed"><font-awesome-icon icon="plus"></font-awesome-icon> Añadir</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        product: Object,
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: String | Location,
            required: true
        }
    },
    computed: {
        rating: function () {
            return this.product.rating?_.round(parseFloat(this.product.rating)):0
        }
    }
}
</script>