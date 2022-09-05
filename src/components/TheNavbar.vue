<template>
    <nav class="nav">
        <ul class="nav__body" v-if="page === 'home'">
            <li>
                <a href="#" class="nav__link">Trending</a>
            </li>
            <li>
                <a href="#" class="nav__link">Advantages</a>
            </li>
            <li>
                <a href="#" class="nav__link">Contact</a>
            </li>
            <li>
                <router-link class="nav__link" :to="{name: 'product'}" >Product</router-link>
            </li>
        </ul>
        <ul class="nav__body" v-else>
            <li>
                <router-link class="nav__link" :to="{name: 'home'}" >Back to Main</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const page = computed(() => route.name)


</script>

<style lang="scss">

.nav {
    &__body {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;

        li {
            position: relative;

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
                background-color: #BD00FF;
                transition: all .3s linear;
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