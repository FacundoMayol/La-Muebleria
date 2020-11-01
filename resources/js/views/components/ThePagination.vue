<template>
    <div class="flex justify-center items-center space-x-2">
        <template v-if="value < 4">
            <button v-for="index in range(value)" :key="index" class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(index)">{{ index+1 }}</button>
        </template>
        <template v-else>
            <button class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(0)">1</button>
            <span class="select-none">·</span>
            <button v-for="index in range(value-2, value)" :key="index" class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(index)">{{ index+1 }}</button>
        </template>
        <span class="bg-blue-500 text-white select-none hover:underline focus:underline px-5 py-2">{{ value+1 }}</span>
        <template v-if="value < pages-4">
            <button v-for="index in range(value+1, value+3)" :key="index" class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(index)">{{ index+1 }}</button>
            <span class="select-none">·</span>
            <button class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(pages-1)">{{ pages }}</button>
        </template>
        <template v-else>
            <button v-for="index in range(value+1, pages)" :key="index" class="text-blue-500 hover:underline focus:underline px-5 py-2" @click="update(index)">{{ index+1 }}</button>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        },
        pages: {
            type: Number,
            required: true
        }
    },
    methods: {
        update: function (value) {
            this.$emit('input', value)
        },
        range: function (start = 0, end){
            return _.range(start, end, 1)
        }
    }
}
</script>