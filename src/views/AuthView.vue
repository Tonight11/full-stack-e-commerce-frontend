<template>
    <main class="main">
        <div class="auth">
            <app-page>
                <div class="auth__form">
                    <router-link class="nav__link auth-back" to="/"
                        >Back to main</router-link
                    >
                    <h1>Log in</h1>
                    <request-auth @sign="login"></request-auth>
                </div>
            </app-page>
        </div>
    </main>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import { useAlertStore } from '@/store/alertStore'
import RequestAuth from '@/components/request/RequestAuth'
import { useAuthStore } from '@/store/authStore'
import { useDark } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
useDark()

const router = useRouter()
const route = useRoute()
const alert = useAlertStore()
const authStore = useAuthStore()

if (route.query.errMsg) {
    alert.setMsg({
        value: 'Time has expired. Please authorize',
        type: 'war',
    })
}

const login = async (e) => {
    try {
        await authStore.logIn(e)
        router.push('/admin')
    } catch (e) {
        console.log(e)
    }
}
</script>

<style lang="scss"></style>
