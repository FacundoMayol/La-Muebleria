<template>
    <div>
        <TitleBanner>Mensajes - administrador</TitleBanner>
        <div class="container mx-auto p-5">
            <h3 class="text-sm md:text-base font-bold uppercase tracking-tighter">
                {{ loading?'Cargando...':(totalItems==0?'Sin mensajes encontrados':(totalItems==1?'1 mensaje encontrado':(totalItems + ' mensajes encontrados'))) }}
            </h3>
            <hr class="border-gray-500 my-2">
            <transition name="fade" mode="out-in">
                <div :key="0" v-if="loading" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    <span class="spinner w-8 h-8 mx-2"></span>
                    Cargando
                </div>
                <div :key="1" v-else-if="error" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    Error al obtener los mensajes de la base de datos: {{ error }}
                </div>
                <div :key="2" v-else-if="items.length == 0" class="flex justify-center items-center text-center align-middle py-8 text-xl font-semibold text-orange-600">
                    No se encontraron mensajes
                </div>
                <div :key="3" v-else>
                    <div class="flex-col divide-y divide-gray-400">
                        <MessageRowItem v-for="(item, index) in items" :key="index" :to="{ name: 'message', params: { messageId: item.id } }" :message="item" @remove="removeMessage(item)"/>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import TitleBanner from './components/TheTitleBanner'
import MessageRowItem from './components/MessageList/MessageListRow'

export default {
    data () {
        return {
            loading: false,
            totalItems: 0,
            items: [],
            error: null
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        $route: function () {
            this.totalItems = 0
            this.items = []
            this.error = null
            this.fetchData()
        }
    },
    methods: {
        fetchData: async function () {
            this.loading = true
            try {
                const data = (await axios.get('/api/messages')).data
                this.items = data.data
                this.totalItems = data.total
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
        removeMessage: async function (message) {
            try{
                await axios.delete('/api/messages/'+message.id)
                console.log("Mensaje eliminado")
                this.$notify({
                    group: 'messages',
                    type: 'success',
                    title: 'Mensaje eliminado exitosamente'
                });
                this.fetchData()
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
        TitleBanner,
        MessageRowItem
    }
}
</script>