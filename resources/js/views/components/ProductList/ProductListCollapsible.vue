<template>
    <div>
        <div class="flex justify-between items-center text-sm">
            <h4 class="font-semibold uppercase tracking-tighter">{{ title }}</h4>
            <button @click="show = !show"><font-awesome-icon :icon="show?'minus':'plus'"></font-awesome-icon></button>
        </div>
        <hr class="border-gray-300 my-2">
        <div v-show="show">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        showInitial: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            show: this.showInitial
        }
    }
}
</script>