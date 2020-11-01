<template>
    <div>
        <div>
            <label class="checkbox">
                <input type="checkbox" disabled :checked="allChecked">
                <span class="checkmark"></span>
                Todo
            </label>
        </div>
        <div v-for="(item, index) in state" v-show="index<limit||showMore" :key="index">
            <label class="checkbox">
                <input type="checkbox" v-model="item.state">
                <span class="checkmark"></span>
                {{ item.name?item.name:item.value }}
            </label>
        </div>
        <button class="text-blue-500 text-sm tracking-tighter" v-if="state.length>limit" @click="showMore = !showMore">{{ showMore?'Mostrar menos':'Mostrar más' }} <font-awesome-icon class="align-middle mx-1" :icon="showMore?'angle-up':'angle-down'"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            validator: function (items) {
                return items.every((item) => {
                    return _.has(item, 'state') && typeof item.state === 'boolean' && _.has(item, 'value')
                })
            }
        },
        limit: {
            type: Number,
            default: 5
        }
    },
    data () {
        return {
            state: this.items,
            showMore: false
        }
    },
    watch: {
        state: function (items) {
            this.$emit('update:items', items)
        }
    },
    computed: {
        allChecked: function () {
            return !this.state.some((item) => {
                return item.state
            })
        }
    }
}
</script>