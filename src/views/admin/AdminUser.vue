<template>
    <h3>Add moderator or helper</h3>
    <request-auth @sign="register"></request-auth>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import RequestAuth from '@/components/request/RequestAuth'
import { useAuthStore } from '@/store/authStore'

const authStore = useAuthStore()

const register = async (e) => {
    await authStore.register(e)
}

useDark()
</script>

<style></style>
