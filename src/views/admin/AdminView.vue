<template>
    <main class="main">
        <div class="admin">
            <app-page>
                <a href="#" @click.prevent="logOut">log_out</a>
                <router-link to="/">Main</router-link>
                <div class="admin__inner">
                    <the-sidebar title="DASHBOARD">
                        <ul>
                            <router-link
                                class="admin__link"
                                :to="{ name: 'AdminProducts' }"
                                >Products</router-link
                            >
                            <router-link
                                class="admin__link"
                                :to="{ name: 'AdminAddProduct' }"
                                >Add product</router-link
                            >
                            <router-link
                                class="admin__link"
                                :to="{ name: 'AdminAddUser' }"
                                >Add helper</router-link
                            >
                        </ul>
                    </the-sidebar>
                    <router-view></router-view>
                </div>
            </app-page>
        </div>
    </main>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import TheSidebar from '@/components/TheSidebar'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'vue-router'

import { useDark } from '@vueuse/core'

useDark()

const router = useRouter()
const authStore = useAuthStore()
const logOut = async () => {
    await authStore.logOut()
    router.push('/')
}
</script>

<style lang="scss">
html.dark {
    .admin__link {
        color: white;
    }
}

.admin {
    &__inner {
        min-height: 100vh;
        padding: 50px 0;
        display: flex;
        gap: 50px;

        @media screen and (max-width: 969px) {
            flex-direction: column;
        }
    }

    &__link {
        color: black;
        margin-bottom: 20px;
        font-size: 18px;

        &.router-link-exact-active {
            color: #8f8f8f;
        }

        &:hover {
            color: #8f8f8f;
        }
    }
}
</style>
