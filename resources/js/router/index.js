import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index.js'

Vue.use(VueRouter)

const Main = () => import('../views/MainPage')
const NotFound = () => import('../views/NotFound')
const Build = () => import('../views/Build')
const Categories = () => import('../views/Categories')
const ProductList = () => import('../views/ProductList')
const ViewProduct = () => import('../views/ViewProduct')
const Search = () => import('../views/Search')
const LogIn = () => import('../views/LogIn')
const SignUp = () => import('../views/SignUp')
const Cart = () => import('../views/Cart')

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
            path: '/build', 
            name: 'build', 
            component: Build,
            meta: {
                title: 'Armar PC'
            }
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
            path: '/product/:productId', 
            name: 'product', 
            component: ViewProduct,
            props: true,
            meta: {
                title: 'Ver producto'
            }
        },
        { 
            path: '/products/:category', 
            name: 'list', 
            component: ProductList,
            props: route => ({ categoryParam: route.params.category, searchQuery: route.query.s, pageQuery: !isNaN(parseInt(route.query.p, 10))?parseInt(route.query.p, 10):0, sortQuery: route.query.sort, sortDescQuery: route.query.sortd == 'true' }),
            meta: {
                title: 'Ver categoría'
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
        if(to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/authenticated']) {
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