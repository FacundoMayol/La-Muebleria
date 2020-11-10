<template>
    <div class="p-2 flex flex-row items-center space-x-4 lg:space-x-6">
        <div class="flex flex-grow flex-col lg:flex-row break-words lg:space-x-6 lg:items-center">
            "<router-link :to="to" class="font-semibold hover:text-orange-600 text-sm lg:text-base">{{ message.title }}</router-link>" de {{ message.name }} ({{ message.email }})
        </div>
        <button :disabled="disabled" @click="disabled?'':$emit('remove')" class="mx-4 text-orange-400 text-3xl disabled:cursor-not-allowed"><font-awesome-icon icon="times"></font-awesome-icon></button>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            validator: function (value) {
                return _.isString(value.name) && _.isString(value.email) && _.isString(value.title) && _.isString(value.message)
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