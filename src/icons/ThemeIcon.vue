<template>
    <div class="header__light" v-if="theme === 'dark'">
        <div class="svg">
            <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.5 2.75V1M18.5 36V34.25M34.25 18.5H36M1 18.5H2.75M29.875 7.125L32.5 4.5M4.5 32.5L7.125 29.875M4.5 4.5L7.125 7.125M29.875 29.875L32.5 32.5"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                />
                <path
                    d="M18.5 25.5C22.366 25.5 25.5 22.366 25.5 18.5C25.5 14.634 22.366 11.5 18.5 11.5C14.634 11.5 11.5 14.634 11.5 18.5C11.5 22.366 14.634 25.5 18.5 25.5Z"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    </div>
    <div class="header__dark" v-else-if="theme === 'light'">
        <div class="svg">
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.2222 1C7.66667 1 1 6.55556 1 15.4444C1 24.3333 7.66667 31 16.5556 31C25.4444 31 31 24.3333 31 18.7778C18.7778 26.5556 5.44445 13.2222 13.2222 1Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['theme'])
</script>

<style lang="scss" scoped>
.svg {
    &::before {
        width: 2px;
    }
}
</style>
