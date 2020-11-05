<template>
    <div class="flex flex-1 flex-col sm:justify-center items-center sm:bg-orange-400">
        <div class="bg-white sm:border sm:border-orange-500 sm:rounded-md sm:shadow-lg w-full max-w-full sm:max-w-sm lg:max-w-lg">
            <h1 class="bg-orange-500 text-white font-semibold text-3xl text-center p-4">Registrarse</h1>
            <div class="px-8 py-6">
                <form class="space-y-6" @submit.prevent="submitCredentials">
                    <div class="space-y-2">
                        <input v-model="form.name" type="text" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Nombre de usuario">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.name" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model="form.email" type="text" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Dirección de correo electrónico">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.email" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model="form.password" type="password" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Contraseña de usuario">
                        <p class="text-red-600" v-for="(error, index) in validationErrors.password" :key="index">{{ error }}</p>
                    </div>
                    <div class="space-y-2">
                        <input v-model="form.password_confirmation" type="password" class="w-full border-b border-orange-300 focus:border-orange-400 py-2 px-1 placeholder-gray-700 text-orange-500 transition duration-300 ease-in-out" placeholder="Confirmación de contraseña">
                    </div>
                    <p class="text-red-600" v-if="generalError">{{ generalError }}</p>
                    <button :disabled="loading" type="submit" class="w-full btn-outlined btn-outlined-orange font-semibold text-center px-3 py-2">
                        <template v-if="loading">
                            <span class="spinner spinner-disabled w-6 h-6 mx-2"></span>
                        </template>
                        <template v-else>
                            Registrarse
                        </template>
                    </button>
                </form>
                <p class="text-orange-500 text-sm mt-2">¿Ya posee cuenta? <router-link class="text-orange-400 hover:text-orange-500 focus:text-orange-500 transition duration-300 ease-in-out" :to="{ name: 'login' }">Inicie sesión</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            validationErrors: {
                name: [],
                email: [],
                password: []
            },
            generalError: '',
            loading: false
        }
    },
    methods: {
        submitCredentials: async function () {
            this.validationErrors = {
                name: [],
                email: [],
                password: []
            }
            this.generalError = ''
            this.loading = true
            try {
                await axios.get('/sanctum/csrf-cookie')
                await axios.post('/api/auth/signup', this.form)
                this.$router.push({ name: 'login'})
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Registro exitoso'
                })
            } catch(e) {
                if (e.response) {
                    _.extend(this.validationErrors, e.response.data.errors)
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