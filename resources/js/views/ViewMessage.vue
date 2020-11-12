<template>
    <div class="flex flex-1 flex-col">
        <TitleBanner>Ver mensaje</TitleBanner>
        <template v-if="error">
            <div class="flex flex-1 flex-col justify-center items-center">
                <h1 class="text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">{{ error }}</h1>
            </div>
        </template>
        <template v-else-if="loading">
            <div class="flex flex-1 flex-col justify-center items-center">
                <span class="spinner w-12 h-12"></span>
            </div>
        </template>
        <template v-else>
            <div class="container mx-auto p-5 mt-2 lg:mt-5 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <div class="lg:w-9/12 border rounded-md bg-gray-200 p-4 space-y-3">
                    <h1 class="text-orange-500 text-center text-4xl">{{ message.title }}</h1>
                    <p class="text-orange-400 text-lg">Creado por: <span class="font-semibold">{{ message.name }} ({{ message.email }})</span></p>
                    <p class="text-gray-800">{{ message.message }}</p>
                </div>
                <div class="lg:w-3/12">
                    <button @click="remove()" class="btn-outlined btn-outlined-orange px-2 py-1 w-full"><font-awesome-icon icon="times"></font-awesome-icon> Eliminar</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import TitleBanner from './components/TheTitleBanner'

export default {
    props: {
        messageId: {
            type: String | Number,
            validator: function (value) {
                return !isNaN(value) && !isNaN(parseInt(value))
            }
        }
    },
    data() {
        return {
            loading: false,
            message: null,
            error: null,
        }
    },
    created () {
        var vm = this
        this.fetchData().then(function () {
            if(vm.message.title)
                document.title = vm.message.title + ' | La mueblería';
        })
    },
    watch: {
        $route: function () {
            this.loading = false
            this.message = null
            this.error = null
            var vm = this
            this.fetchData().then(function () {
                if(vm.message.title)
                    document.title = vm.message.title + ' | La mueblería';
            })
        }
    },
    methods: {
        fetchData: async function () {
            this.loading = true
            try {
                const data = (await axios.get('/api/messages/'+this.messageId)).data
                this.message = data
            } catch(e) {
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.error = tempError + " (" + e.message + ")"
            } finally {
                this.loading = false
            }
        },
        remove: async function () {
            try{
                await axios.delete('/api/messages/'+this.message.id)
                console.log("Mensaje eliminado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Mensaje eliminado exitosamente'
                });
                this.$router.push({ name: 'admin-contact'})
            }catch(e){
                console.log(e);
                var tempError = ""
                if (e.response) {
                    if(e.response.status == 404)
                        tempError += "El recurso solicitado no existe"
                    else if(e.response.status == 401 || e.response.status == 403)
                        tempError += "No posee acceso al recurso solicitado"
                } else if (e.request) {
                    tempError = "El servidor tardó en responder";
                } else {
                    tempError = "No se pudo comunicar con el servidor";
                }
                this.$notify({
                    group: 'messages',
                    type: 'error',
                    title: 'Error',
                    text: tempError + ' (' + e.message + ')'
                });
            }
        }
    },
    components: {
        TitleBanner
    }
}
</script>