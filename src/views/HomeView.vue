<template>
    <main class="main">
        <section-first></section-first>
        <section-brand></section-brand>
        <section-best></section-best>
        <section-advantage></section-advantage>
        <section-subscribe></section-subscribe>
        <section-product></section-product>
        <section-contact></section-contact>
    </main>
</template>

<script setup>
import SectionFirst from "@/sections/SectionFirst"
import SectionBrand from "@/sections/SectionBrand"
import SectionBest from "@/sections/SectionBest";
import SectionAdvantage from "@/sections/SectionAdvantage";
import SectionSubscribe from "@/sections/SectionSubscribe";
import SectionProduct from '@/sections/SectionProduct'
import SectionContact from '@/sections/SectionContact'
</script>

<style >

.main {
    padding-top: 100px;
}

</style>