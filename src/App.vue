<template>
    <div class="wrapper">
        <the-header v-if="layout === 'MainLayout'"></the-header>
        <component :is="layouts[layout]"></component>
        <the-footer v-if="layout === 'MainLayout'"></the-footer>
    </div>
</template>


<script setup>
import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'
import AdminLayout from '@/layout/AdminLayout'
import TheHeader from '@/components/TheHeader'
import TheFooter from "@/components/TheFooter"
import {useRoute} from "vue-router";
import {computed} from "vue";


const route = useRoute()

const layout = computed(() => route.meta.layout)
const layouts = {
    AuthLayout,
    MainLayout,
    AdminLayout
}

</script>

<style lang="scss">

// normalize
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
    overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
    text-transform: none;
    outline: none;
    cursor: pointer;
    border: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

// img

img {
    display: block;
    max-width: 100%;
    height: auto;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

.wrapper {
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;
}

</style>
