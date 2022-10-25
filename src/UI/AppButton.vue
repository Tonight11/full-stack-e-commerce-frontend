<template>
    <button
        ref="btn"
        :disabled="disable"
        class="btn"
        :class="{
            big: big,
            small: small,
        }"
    >
        {{ text }} <slot />
    </button>
</template>

<script setup>
import { defineProps, ref, defineExpose } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const btn = ref()

defineExpose({ btn })

defineProps({
    text: String,
    big: Boolean,
    small: Boolean,
    disable: Boolean,
})
</script>

<style lang="scss">
.btn {
    display: inline-block;
    color: white;
    position: relative;
    background-color: #bd00ff;
    text-decoration: none;

    cursor: pointer;
    padding: 0.6em 2.8em;

    &:disabled {
        background-color: #e39eff;
        cursor: not-allowed;
    }

    &.big {
        font-size: 24px;
        font-weight: 600;
        padding: 0.3em 2.8em;

        @media screen and (min-width: 1800px) {
            font-size: 36px;
        }
    }

    &.small {
        font-size: 24px;
        padding: 0.4em 2.8em;

        @media screen and (min-width: 1800px) {
            font-size: 32px;
        }

        @media screen and (max-width: 827px) {
            font-size: 18px;
        }
    }
}
</style>
