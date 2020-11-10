<template>
    <div class="flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400">
        <div class="bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg">
            <h1 class="bg-orange-500 text-white font-semibold text-3xl text-center p-4">Contáctanos</h1>
            <div class="px-8 py-6">
                <form class="space-y-6" @submit.prevent="submitInformation">
                    <div class="space-y-2">
                        <input v-model="form.name" :readonly="authenticated" type="text" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Nombre completo">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.name" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model="form.email" :readonly="authenticated" type="email" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Dirección de correo electrónico">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.email" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model="form.title" type="text" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" maxlength="100" placeholder="Asunto">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.title" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <div class="space-y-1">
                            <textarea v-model="form.message" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" maxlength="512" placeholder="Mensaje"></textarea>
                            <p class="text-sm text-orange-500 text-right">{{ form.message.length }}/512</p>
                        </div>
                        <p class="text-red-600" v-for="(error, index) in validationErrors.message" :key="index">{{ error }}</p>
                    </div>
                    <p class="text-red-600" v-if="generalError">{{ generalError }}</p>
                    <button :disabled="loading" type="submit" class="w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2">
                        <template v-if="loading">
                            <span class="spinner spinner-disabled w-6 h-6 mx-2"></span>
                        </template>
                        <template v-else>
                            Enviar mensaje
                        </template>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    data () {
        return {
            form: {
                name: '',
                email: '',
                title: '',
                message: ''
            },
            validationErrors: {
                name: [],
                email: [],
                title: [],
                message: []
            },
            generalError: '',
            loading: false
        }
    },
    computed: {
        ...mapGetters('auth', [
            'authenticated'
        ]),
        ...mapState('auth', [
            'user'
        ])
    },
    created() {
        if(this.authenticated){
            this.form.name = this.user.name
            this.form.email = this.user.email
        }
    },
    methods: {
        submitInformation: async function () {
            this.validationErrors = {
                name: [],
                email: [],
                title: [],
                message: []
            }
            this.generalError = ''
            this.loading = true
            try {
                await axios.post('/api/messages', this.form)
                this.$router.push({ name: 'main'})
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Mensaje enviado exitosamente'
                })
            } catch (e) {
                if (e.response) {
                    if(e.response.data.errors)
                        _.extend(this.validationErrors, e.response.data.errors)
                    else this.generalError = e.response.data
                } else {
                    var tempError = ""
                    if (e.request) {
                    tempError = "El servidor tardó en responder";
                    } else {
                        tempError = "No se pudo comunicar con el servidor";
                    }
                    this.generalError = tempError + " (" + e.message + ")"
                }
            } finally {
                this.loading = false
            }
        }
    }
}
</script>