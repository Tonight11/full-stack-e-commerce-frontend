<template>
    <main>
        <section-first></section-first>
        <section-brand></section-brand>
        <section-best id="best"></section-best>
        <section-advantage id="advan"></section-advantage>
        <section-product id="catalog"></section-product>
        <section-subscribe></section-subscribe>
        <section-contact id="contact"></section-contact>
    </main>
</template>

<script setup>
import SectionFirst from '@/sections/SectionFirst.vue'
import SectionBrand from '@/sections/SectionBrand'
import SectionBest from '@/sections/SectionBest'
import SectionAdvantage from '@/sections/SectionAdvantage'
import SectionSubscribe from '@/sections/SectionSubscribe'
import SectionProduct from '@/sections/SectionProduct'
import SectionContact from '@/sections/SectionContact'

import { onMounted } from 'vue'
import { useProductStore } from '@/store/productStore'
const productStore = useProductStore()

onMounted(async () => {
    await productStore.getProducts()
})
</script>

<style lang="scss"></style>
