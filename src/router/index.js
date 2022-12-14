import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import { useAuthStore } from '@/store/authStore'
import { useAlertStore } from '@/store/alertStore'
import { useBurgerStore } from '@/store/burgerStore'

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
    scrollBehavior(to, from, savedPosition) {
        const burgerMenu = useBurgerStore()

        if (burgerMenu.isActive === true) {
            burgerMenu.toggle()
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 70,
            }
        }

        if (savedPosition) {
            return savedPosition
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ left: 0, top: 0 })
                }, 50)
            })
        }
    },
})

router.beforeEach((to, from, next) => {
    const auth = to.meta.auth
    const authStore = useAuthStore()
    const alert = useAlertStore()
    alert.clearMsg()

    if (auth && authStore.isAuth) {
        next()
    } else if (auth && !authStore.isAuth) {
        next('/auth?errMsg=auth')
    } else {
        next()
    }
})

export default router
