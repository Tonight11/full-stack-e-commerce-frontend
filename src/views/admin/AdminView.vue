<template>
    <main class="main">
        <div class="admin">
            <app-page>
                <div class="admin__inner">
                    <the-sidebar title="DASHBOARD"></the-sidebar>
                    <admin-products></admin-products>
                </div>
            </app-page>
        </div>
    </main>
</template>

<script setup>

import AdminProducts from "@/components/AdminProducts"
import AppPage from '@/UI/AppPage'
import TheSidebar from "@/components/TheSidebar"

import {useDark} from '@vueuse/core'

useDark()


</script>

<style lang="scss">

.admin {
    padding-top: 50px;
    &__inner {
        display: flex;
        gap: 50px;
    }
}

</style>