<template>
    <div class="head-title" ref="head">
        <h2 class="title" ref="secTitle">{{ title }}</h2>
        <div
            :class="[
                'text',
                {
                    text__df: link,
                },
            ]"
            v-if="text"
        >
            <div class="text__item" ref="secText">{{ text }}</div>
            <router-link
                v-if="link"
                custom
                v-slot="{ href, navigate }"
                :to="{ name: 'product' }"
            >
                <a
                    class="text__link"
                    :href="href"
                    @click="navigate"
                    ref="secLink"
                >
                    {{ linkText }}
                </a>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useProductStore } from '@/store/productStore'

gsap.registerPlugin(ScrollTrigger)

const productStore = useProductStore()

defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    linkText: {
        type: String,
        required: false,
    },
})

const head = ref()
const secTitle = ref()
const secText = ref()
const secLink = ref()

onMounted(async () => {
    await productStore.getProducts()

    const productTl = gsap.timeline({
        scrollTrigger: {
            trigger: head.value,
            start: 'top 85%',
        },
        defaults: { duration: 0.6 },
    })
    if (secText.value === undefined && secLink.value === undefined) {
        productTl.from(secTitle.value, {
            y: 100,
            opacity: 0,
        })
    } else if (secLink.value === undefined) {
        productTl
            .from(secTitle.value, {
                y: 100,
                opacity: 0,
            })
            .from(
                secText.value,
                {
                    y: 100,
                    opacity: 0,
                },
                '-=0.3'
            )
    } else {
        productTl
            .from(secTitle.value, {
                y: 100,
                opacity: 0,
            })
            .from(
                secText.value,
                {
                    y: 100,
                    opacity: 0,
                },
                '-=0.3'
            )
            .from(
                secLink.value,
                {
                    x: 100,
                    opacity: 0,
                },
                '-=0.6'
            )
    }

    
})
</script>

<style lang="scss">
.head-title {
    margin-bottom: 50px;

    @media screen and (max-width: 827px) {
        margin-bottom: 25px;
    }
}

.title {
    font-weight: 700;
    font-size: 38px;
    text-align: center;

    @media screen and (min-width: 1800px) {
        font-size: 52px;
    }

    @media screen and (max-width: 827px) {
        font-size: 28px;
    }
}

.text {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;

    margin-top: 15px;

    @media screen and (min-width: 1800px) {
        font-size: 36px;
        line-height: normal;
    }

    @media screen and (max-width: 827px) {
        font-size: 16px;
    }

    &__item {
        max-width: 690px;
        text-align: center;
        margin: 0 auto;

        @media screen and (min-width: 1800px) {
            margin: 0;
            max-width: 100%;
        }
    }

    &__df {
        display: flex;
        align-items: center;
        position: relative;
        @media screen and (max-width: 637px) {
            flex-direction: column;
            gap: 20px;
        }
    }

    &__link {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: #8f8f8f;
        font-size: 18px;
        text-decoration: none;

        @media screen and (max-width: 637px) {
            position: static;
            text-align: center;
        }

        @media screen and (min-width: 1800px) {
            font-size: 24px;
        }
    }
}
</style>
