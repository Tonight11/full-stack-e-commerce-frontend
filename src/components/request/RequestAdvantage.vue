<template>
    <div :class="['advantage__content' + idx, 'advantage__content', hovered]">
        <div class="advantage__info">
            {{ text }}
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useHoverStore } from '@/store/hoverStore'
const props = defineProps(['text', 'count'])

const hoverStore = useHoverStore()
const idx = props.count + 1

const numberOfCircle = computed(() => hoverStore.hover)

const hovered = computed(() => {
    return numberOfCircle.value === idx ? 'hovered' : ''
})
</script>

<style lang="scss">
.advantage__content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 371px;
    border: 1px solid black;
    width: 100%;
    background: #fff500;
    padding: 10px;
    color: black;
    font-size: 18px;
    pointer-events: none;
    transition: all 0.3s linear;
}

.hovered {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
}

.advantage__content1 {
    top: 180px;
    left: auto;
    right: 200px;
}

.advantage__content2 {
    top: 310px;
    left: auto;
    right: 220px;

    @media screen and (max-width: 976px) {
        top: 250px;
    }

    @media screen and (max-width: 790px) {
        top: 220px;
    }
}

.advantage__content3 {
    top: 480px;
    left: 130px;

    @media screen and (max-width: 790px) {
        top: 420px;
        left: 100px;
    }
}

.advantage__content4 {
    top: 600px;
    left: auto;
    right: 180px;
    @media screen and (max-width: 790px) {
        top: 550px;
        right: 150px;
    }
}
</style>
