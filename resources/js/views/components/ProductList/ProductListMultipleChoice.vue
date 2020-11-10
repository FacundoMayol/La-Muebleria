<template>
    <div>
        <div>
            <label class="checkbox">
                <input type="checkbox" disabled :checked="allChecked">
                <span class="checkmark"></span>
                Todo
            </label>
        </div>
        <div v-for="(item, index) in options" v-show="index<limit||showMore" :key="index">
            <label class="checkbox">
                <input type="checkbox" :value="item.value" v-model="state">
                <span class="checkmark"></span>
                {{ item.name?item.name:item.value }}
            </label>
        </div>
        <button class="text-blue-500 text-sm tracking-tighter" v-if="options.length>limit" @click="showMore = !showMore">{{ showMore?'Mostrar menos':'Mostrar más' }} <font-awesome-icon class="align-middle mx-1" :icon="showMore?'angle-up':'angle-down'"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            required: true
        },
        options: {
            type: Array,
            required: true,
            validator: function (options) {
                return options.every((item) => {
                    return _.has(item, 'value') 
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
            showMore: false
        }
    },
    computed: {
        state: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit("input", value) 
            }
        },
        allChecked: function () {
            return this.value.length == 0
        }
    }
}
</script>