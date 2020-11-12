<template>
    <tr class="even:bg-gray-200 whitespace-no-wrap">
        <td class="p-3 flex justify-center items-center">
            <div class="w-12 sm:w-16 md:w-20 hover:relative hover:z-10 flex-shrink-0 rounded-sm border bg-white transition-transform duration-150 ease-in-out transform hover:scale-125 cursor-pointer p-1">
                <template v-if="product.thumbnail">
                    <img class="block w-full h-auto" :src="product.thumbnail"/>
                </template>
                <template v-else>
                    <span>-</span>
                </template>
            </div>
        </td>
        <td class="p-2">
            <router-link :to="to" class="font-semibold hover:text-orange-600">{{ product.name }}</router-link>
        </td>
        <!--td class="p-2 align-middle" v-for="(value, key) in product.data" :key="key">
            {{ value }}
        </td-->
        <td class="p-2">
            <span class="font-medium">{{ product.price }}</span>
        </td>
        <td class="p-2 text-orange-600 select-none">
            <span v-for="n in rating" :key="n">
                ★
            </span>
            <span v-for="n in (5-rating)" :key="n+rating">
                ☆
            </span>
            <span class="text-sm">({{ product.rating?product.rating:'0' }} ★)</span>
        </td>
        <td class="p-2 text-center">
            <button :disabled="disabled" @click="disabled?'':$emit('add')" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed"><font-awesome-icon icon="plus"></font-awesome-icon><template v-if="!administrator"> Añadir</template></button>
            <button v-if="administrator" :disabled="disabled" @click="disabled?'':$emit('remove')" class="btn-outlined btn-outlined-orange px-2 py-1 disabled:cursor-not-allowed"><font-awesome-icon icon="times"></font-awesome-icon></button>
            <router-link :to="{ name: 'edit-product', params: {
                productId: product.id
            } }" v-if="administrator" class="inline-block btn-outlined btn-outlined-orange px-2 py-1"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></router-link>
        </td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'

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
        ...mapGetters('auth', [
            'administrator'
        ]),
        rating: function () {
            return this.product.rating?_.round(parseFloat(this.product.rating)):0
        }
    },
}
</script>