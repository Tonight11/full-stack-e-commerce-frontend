import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: 'MainLayout'
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView'),
        meta: {
            layout: 'MainLayout'
        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/views/ProductView'),
        meta: {
            layout: 'MainLayout'
        }
    },
    {
        path: '/productItem/:id',
        name: 'productItem',
        component: () => import('@/views/ProductItemView'),
        meta: {
            layout: 'MainLayout'
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/AuthView'),
        meta: {
            layout: 'AuthLayout'
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/AdminView'),
        meta: {
            layout: 'AdminLayout'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
