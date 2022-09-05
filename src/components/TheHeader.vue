<template>
    <header class="header">
        <app-page>
            <div class="header__inner">
                <div class="logo">T<span>H</span></div>
                <the-navbar></the-navbar>
                <div class="header__edge">
                    <AdminIcon class="header__icon"/>
                    <ThemeIcon  class="header__icon" :theme="'light'"/>
                    <CallIcon class="header__icon"/>
                    <CartIcon class="header__icon"/>
                </div>
            </div>
        </app-page>
    </header>
</template>

<script setup>

import AppPage from "@/UI/AppPage"
import TheNavbar from "@/components/TheNavbar"
import AdminIcon from "@/icons/AdminIcon"
import CallIcon from "@/icons/CallIcon"
import CartIcon from "@/icons/CartIcon"
import ThemeIcon from "@/icons/ThemeIcon"
</script>

<style lang="scss">

.header {
    padding: 20px 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;

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
        color: #FFF500;
    }
}

.header__icon {
    svg {
        width: 35px;
        height: 35px;
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
        background-color: #BD00FF;
        transition: all .3s linear;
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