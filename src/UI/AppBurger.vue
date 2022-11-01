<template>
    <div
        class="hamburger-lines"
        :class="{
            active: isActive,
        }"
    >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['isActive'])
</script>

<style lang="scss" scoped>
html.dark {
    .line {
        background-color: whitesmoke;
    }
}
.hamburger-lines {
    display: none;
    height: 26px;
    width: 32px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &.active {
        .line1 {
            transform: rotate(45deg);
        }
        .line2 {
            transform: scaleY(0);
        }
        .line3 {
            transform: rotate(-45deg);
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
}
.line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #0e2431;
}
.line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}
.line2 {
    transition: transform 0.2s ease-in-out;
}
.line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}
</style>
