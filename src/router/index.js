import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import { useAuthStore } from '@/store/authStore'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView'),
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/views/ProductView'),
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/productItem/:id',
        name: 'productItem',
        component: () => import('@/views/ProductItemView'),
        props: true,
        meta: {
            layout: 'MainLayout',
        },
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/AuthView'),
        meta: {
            layout: 'AuthLayout',
        },
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/admin/AdminView'),
        meta: {
            layout: 'AdminLayout',
            auth: true,
        },
        children: [
            {
                path: '',
                name: 'AdminProducts',
                component: () => import('@/views/admin/AdminProducts'),
            },
            {
                path: '/addProduct',
                name: 'AdminAddProduct',
                component: () => import('@/views/admin/AdminAdd'),
            },
            {
                path: '/addUser',
                name: 'AdminAddUser',
                component: () => import('@/views/admin/AdminUser'),
            },
        ],
    },
    {
        path: '/admin/:id',
        name: 'adminItem',
        props: true,
        component: () => import('@/views/admin/AdminItemView'),
        meta: {
            layout: 'AdminLayout',
            auth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)

    const auth = to.meta.auth
    const authStore = useAuthStore()

    if (auth && authStore.isAuth) {
        next()
    } else if (auth && !authStore.isAuth) {
        next('/auth?errMsg=auth')
    } else {
        next()
    }
})

export default router
