<template>
    <nav class="nav">
        <div class="overlay" v-if="isActive" @click="close"></div>
        <ul
            class="nav__body"
            :class="{ active: isActive }"
            v-if="page === 'home'"
        >
            <li>
                <a href="#best" v-smooth-scroll class="nav__link">Trending</a>
            </li>
            <li>
                <a href="#advan" v-smooth-scroll class="nav__link"
                    >Advantages</a
                >
            </li>
            <li>
                <a
                    href="#contact"
                    v-smooth-scroll="{ offset: 60 }"
                    class="nav__link"
                    >Contact</a
                >
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'product' }"
                    >Product</router-link
                >
            </li>
        </ul>
        <ul class="nav__body" :class="{ active: isActive }" v-else>
            <li>
                <router-link class="nav__link" :to="{ name: 'home' }"
                    >Back to Main</router-link
                >
            </li>
            <li>
                <router-link class="nav__link" :to="{ name: 'product' }"
                    >Product</router-link
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, defineProps, defineEmits } from 'vue'
defineProps({
    isActive: Boolean,
})
const emit = defineEmits(['closeMenu'])
const close = () => {
    emit('closeMenu')
}

const route = useRoute()
const page = computed(() => route.name)
</script>

<style lang="scss">
html.dark {
    .nav__body {
        @media screen and (max-width: 768px) {
            background-color: #252525;
        }
    }
}

.overlay {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}
.nav {
    &__body {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;

        @media screen and (max-width: 768px) {
            border-top: 1px solid rgba(0, 0, 0, 0.5);
            position: fixed;
            display: block;
            padding: 25px;
            left: 0;
            transition: all 0.3s linear;
            top: 78px;
            background: white;
            width: 100%;
            transform: scaleY(0);
            transform-origin: top;
            box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.6);

            overflow: hidden;
            visibility: hidden;
            &.active {
                overflow: visible;
                visibility: visible;
                transform: scaleY(1);
            }
        }

        li {
            position: relative;

            @media screen and (max-width: 768px) {
                margin-bottom: 25px;
            }

            &::before {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                display: block;
                width: 0;
                height: 2px;
                opacity: 0;
                visibility: hidden;
                background-color: #bd00ff;
                transition: all 0.3s linear;
            }

            &:hover {
                &::before {
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    &__link {
        text-decoration: none;
        font-size: 18px;
        color: #000000;
    }
}
</style>
