import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Pages
const Main = () => import('../views/MainPage')
const NotFound = () => import('../views/NotFound')

// Routes
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: Main,
            meta: {
                title: 'Página principal'
            }
        },
        { 
            path: '/404', 
            name: '404', 
            component: NotFound,
            meta: {
                title: 'Error 404'
            }
        },
        { 
            path: '*', 
            redirect: '/404', 
        },
    ],
});

router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title + ' | KukuraGaming';
    }
})

export default router