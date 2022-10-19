<template>
    <aside class="sidebar">
        <div class="sidebar__title">{{ title }}</div>
        <slot></slot>
    </aside>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
})
</script>

<style lang="scss">
.sidebar {
    max-width: 280px;
    padding: 30px;
    background: #ffffff;
    box-shadow: 0px 4px 35px 6px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 900px) {
        max-width: 100%;
    }

    &__title {
        font-weight: 600;
        font-size: 28px;
        margin-bottom: 50px;
    }
}
</style>
