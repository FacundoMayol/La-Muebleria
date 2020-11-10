import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index.js'

Vue.use(VueRouter)

const Main = () => import('../views/MainPage')
const NotFound = () => import('../views/NotFound')
const Categories = () => import('../views/Categories')
const ProductList = () => import('../views/ProductList')
const ViewProduct = () => import('../views/ViewProduct')
const UpdateProduct = () => import('../views/UpdateProduct')
const CreateProduct = () => import('../views/CreateProduct')
const Search = () => import('../views/Search')
const LogIn = () => import('../views/LogIn')
const SignUp = () => import('../views/SignUp')
const Cart = () => import('../views/Cart')
const Contact = () => import('../views/Contact')
const MessageList = () => import('../views/MessageList')
const ViewMessage = () => import('../views/ViewMessage')

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                title: 'Página principal'
            }
        },
        { 
            path: '/search', 
            name: 'search', 
            component: Search,
            props: route => ({ searchQuery: route.query.s, pageQuery: !isNaN(parseInt(route.query.p, 10))?parseInt(route.query.p, 10):0 }),
            meta: {
                title: 'Buscar'
            }
        },
        {
            path: '/login', 
            name: 'login', 
            component: LogIn,
            meta: {
                title: 'Iniciar sesión',
                guest: true
            },
        },
        {
            path: '/signup', 
            name: 'signup', 
            component: SignUp,
            meta: {
                title: 'Registrarse',
                guest: true
            },
        },
        {
            path: '/cart', 
            name: 'cart', 
            component: Cart,
            meta: {
                title: 'Carrito de compras'
            },
        },
        { 
            path: '/products', 
            name: 'categories', 
            component: Categories,
            meta: {
                title: 'Productos'
            }
        },
        { 
            path: '/product/create', 
            name: 'add-product', 
            component: CreateProduct,
            meta: {
                title: 'Añadir producto',
                requiresAdmin: true
            }
        },
        { 
            path: '/product/:productId', 
            name: 'product', 
            component: ViewProduct,
            props: true,
            meta: {
                title: 'Ver producto'
            }
        },
        { 
            path: '/product/:productId/edit', 
            name: 'edit-product', 
            component: UpdateProduct,
            props: true,
            meta: {
                title: 'Editar producto',
                requiresAdmin: true
            }
        },
        { 
            path: '/products/:category', 
            name: 'list', 
            component: ProductList,
            props: route => ({ 
                categoryParam: route.params.category, 
                searchQuery: route.query.s, 
                pageQuery: !isNaN(parseInt(route.query.p, 10))?parseInt(route.query.p, 10):0, 
                sortQuery: route.query.sort, 
                sortDescQuery: route.query.sortd == 'true', 
                ratingStartQuery: !isNaN(parseInt(route.query.rating_start, 10))?parseInt(route.query.rating_start, 10):null, 
                ratingEndQuery: !isNaN(parseInt(route.query.rating_end, 10))?parseInt(route.query.rating_end, 10):null,
                priceStartQuery: !isNaN(parseFloat(route.query.price_start))?parseFloat(route.query.price_start):null, 
                priceEndQuery: !isNaN(parseFloat(route.query.price_end))?parseFloat(route.query.price_end):null
            }),
            meta: {
                title: 'Ver categoría'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contacto'
            }
        },
        {
            path: '/contact/admin',
            name: 'admin-contact',
            component: MessageList,
            meta: {
                title: 'Ver mensajes',
                requiresAdmin: true
            }
        },
        {
            path: '/message/:messageId',
            name: 'message',
            component: ViewMessage,
            props: true,
            meta: {
                title: 'Ver mensaje',
                requiresAdmin: true
            }
        },
        { 
            path: '*', 
            component: NotFound,
            meta: {
                title: 'Error 404'
            } 
        },
    ],
});

router.beforeEach((to, from, next) => {
    store.dispatch('auth/me').then(function () {
        if(to.matched.some(record => record.meta.requiresAdmin) && !store.getters['auth/administrator']) {
            Vue.notify({
                group: 'messages',
                type: 'error',
                title: 'Error',
                text: 'No posee autorización para realizar tal acción'
            });
            next({
                name: 'main'
            })
        } else if(to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/authenticated']) {
            next({
                name: 'login'
            })
        } else if(to.matched.some(record => record.meta.guest) && store.getters['auth/authenticated']) {
            next({ 
                name: 'main'
            })
        } else {
            next()
        }
    });
})

router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title + ' | KakeraGaming';
    }
})

export default router