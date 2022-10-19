<template>
    <div class="grid__item" ref="grid">
        <img src="../../assets/img/best/1.jpg" alt="best" />
        <div class="grid__info">
            <div class="grid__name">{{ item[0].name }}</div>
            <div class="grid__text">{{ item[0].text }}</div>
            <app-button small text="BUY"></app-button>
        </div>
    </div>
</template>

<script setup>
import AppButton from '@/UI/AppButton'
import { defineProps, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const grid = ref()

onMounted(() => {
    const gridTl = gsap.timeline({
        scrollTrigger: {
            trigger: grid.value,
            start: 'top 80%',
            end: '+=400',
            scrub: true,
        },
        defaults: { duration: 1 },
    })
    gridTl.from(grid.value, {
        opacity: 0,
        x: -100,
    })
})

defineProps(['item'])
</script>

<style></style>
