<template>
    <div class="back" @click="back">
        <div class="arrow">
            <div class="arrow-top"></div>
            <div class="arrow-bottom"></div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const back = () => {
    router.back()
}
</script>

<style scoped lang="scss">
html.dark {
    .back {
        background-color: #bd00ff;
    }
}

.back {
    padding: 20px 10px;
    background-color: #fff500;
    position: relative;
    max-width: 40px;
    cursor: pointer;

    &:hover .arrow {
        &-top:after {
            left: 0;
            transition-delay: 0.15s;
        }

        &-bottom:after {
            right: 0;
            transition-delay: 0s;
        }
    }
}

.arrow {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(180deg);
    transition: transform 0.1s;
    width: 20px;

    &-top,
    &-bottom {
        background-color: #666;
        height: 3px;
        left: -2px;
        position: absolute;
        top: 50%;
        width: 100%;

        &:after {
            background-color: #fff;
            content: '';
            height: 100%;
            position: absolute;
            top: 0;
            transition: all 0.15s;
        }
    }

    &-top {
        transform: rotate(45deg);
        top: 53%;
        transform-origin: bottom right;

        &:after {
            left: 100%;
            right: 0;
            transition-delay: 0s;
        }
    }

    &-bottom {
        transform: rotate(-45deg);
        transform-origin: top right;

        &:after {
            left: 0;
            right: 100%;
            transition-delay: 0.15s;
        }
    }

    &:active {
        transform: translateX(-50%) translateY(-50%) scale(0.9) rotate(180deg);
    }
}
</style>
