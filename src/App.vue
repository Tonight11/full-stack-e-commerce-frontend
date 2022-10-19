<template>
    <div class="wrapper">
        <the-header v-if="layout === 'MainLayout'"></the-header>
        <component :is="layouts[layout]"></component>
        <app-notif></app-notif>
        <the-footer v-if="layout === 'MainLayout'"></the-footer>
    </div>
</template>

<script setup>
import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'
import AdminLayout from '@/layout/AdminLayout'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import AppNotif from '@/UI/AppNotif.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const layout = computed(() => route.meta.layout)
const layouts = {
    AuthLayout,
    MainLayout,
    AdminLayout,
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
