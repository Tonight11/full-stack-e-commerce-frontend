<template>
    <div class="head-title">
        <h2 class="title">{{ title }}</h2>
        <div
            :class="['text', {
        text__df: link
    }]"
            v-if="text">
            <div class="text__item">{{ text }}</div>
            <router-link class="text__link" :to="{name: link}" v-if="link">{{ linkText }}</router-link>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    linkText: {
        type: String,
        required: false
    }
})

</script>

<style lang="scss">

.head-title {
    margin-bottom: 50px;
}

.title {
    font-weight: 700;
    font-size: 38px;
    text-align: center;
}

.text {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;


    margin-top: 15px;

    &__item {
        max-width: 690px;
        text-align: center;
        margin: 0 auto;
    }

    &__df {
        display: flex;
        position: relative;
        @media screen and (max-width: 637px){
            flex-direction: column;
            gap: 20px;
        }
    }

    &__link {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #8F8F8F;
        font-size: 18px;
        text-decoration: none;

        @media screen and (max-width: 637px){
            position: static;
            text-align: center;
        }
    }
}
</style>