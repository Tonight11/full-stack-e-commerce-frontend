<template>
    <header
        class="header"
        :class="{
            fixed: position === 'fixed',
        }"
        :style="{
            position,
        }"
    >
        <app-page>
            <div class="header__inner">
                <div class="logo">T<span>H</span></div>
                <the-navbar
                    :isActive="burger.isActive"
                    @closeMenu="closeMenu"
                ></the-navbar>
                <div class="header__edge">
                    <router-link :to="{ name: 'AdminProducts' }">
                        <AdminIcon class="header__icon" />
                    </router-link>
                    <ThemeIcon
                        class="header__icon"
                        :theme="isDark ? 'dark' : 'light'"
                        @click="toggleDark()"
                    />
                    <a href="tel:79067886574">
                        <CallIcon class="header__icon" />
                    </a>
                    <router-link :to="{ name: 'cart' }">
                        <CartIcon class="header__icon" />
                    </router-link>
                </div>
                <app-burger
                    :isActive="burger.isActive"
                    @click="burger.toggle"
                ></app-burger>
            </div>
        </app-page>
    </header>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import TheNavbar from '@/components/TheNavbar'
import AdminIcon from '@/icons/AdminIcon'
import CallIcon from '@/icons/CallIcon'
import CartIcon from '@/icons/CartIcon'
import ThemeIcon from '@/icons/ThemeIcon'
import AppBurger from '@/UI/AppBurger.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { useBurgerStore } from '@/store/burgerStore'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const burger = useBurgerStore()

const route = useRoute()
const position = computed(() => (route.name === 'home' ? 'fixed' : 'static'))

const closeMenu = () => {
    if (burger.isActive === true) {
        burger.toggle()
    }
}
</script>

<style lang="scss">
.header {
    padding: 10px 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;

    &.fixed {
        box-shadow: 0 0 5px 0.1px black;
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__edge {
        display: flex;
        align-items: center;
        gap: 25px;
    }
}

.logo {
    font-weight: 800;
    font-size: 48px;

    span {
        color: #fff500;
    }
}

.header__icon {
    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
}

.svg {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        display: block;
        bottom: 0px;
        left: -10px;
        width: 2px;
        height: 0;
        opacity: 0;
        visibility: hidden;
        background-color: #bd00ff;
        transition: all 0.3s linear;
    }

    &:hover {
        &::before {
            height: 100%;
            opacity: 1;
            visibility: visible;
        }
    }
}
</style>
