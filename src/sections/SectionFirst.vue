<template>
    <section class="first">
        <app-page>
            <div class="first__inner">
                <div class="first__info">
                    <h1 class="first__title" ref="title">
                        Explore&Find your <br />
                        favorite clothes
                    </h1>
                    <div class="first__text" ref="text">
                        Our collection of clothes as well known <span>TH</span>,
                        <br />
                        will help you look fresh and fashionable
                    </div>
                    <app-button
                        text="Explore"
                        ref="btn"
                        href="#catalog"
                        v-smooth-scroll
                    ></app-button>
                </div>
                <div class="first__bg">
                    <img src="../assets/img/girl.png" alt="girl" ref="img" />
                </div>
            </div>
        </app-page>
    </section>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppButton from '@/UI/AppButton'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const title = ref()
const text = ref()
const img = ref()
const btn = ref()

const tl = gsap.timeline({
    defaults: { duration: 1.5 },
})

onMounted(() => {
    tl.from(title.value, {
        x: -100,
        opacity: 0,
    })
        .from(
            text.value,
            {
                x: -100,
                opacity: 0,
            },
            '-=1.1'
        )
        .from(
            btn.value.btn,
            {
                y: 100,
                opacity: 0,
            },
            '<'
        )
        .from(
            img.value,
            {
                x: 200,
                opacity: 0,
            },
            '<'
        )
})
</script>

<style lang="scss">
.first {
    display: flex;
    align-items: center;

    &__inner {
        display: flex;
        min-height: 100vh;

        @media screen and (max-width: 967px) {
            flex-direction: column;
            justify-content: center;
        }
    }

    &__info {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        @media screen and (min-width: 1800px) {
            width: 70%;
        }
        @media screen and (min-width: 2200px) {
            width: 100%;
        }
        @media screen and (max-width: 967px) {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-bottom: 50px;
            padding-top: 15%;
        }

        @media screen and (max-width: 710px) {
            padding-top: 20%;
        }

        @media screen and (max-height: 600px) and (max-width: 520px) {
            padding-top: 20%;
        }

        @media screen and (max-width: 400px) {
            padding-top: 30%;
        }

        @media screen and (max-height: 600px) {
            flex: 1;
            justify-content: center;
        }
    }

    &__bg {
        position: relative;
        display: flex;
        align-items: flex-end;
        top: 0;
        left: -100px;

        @media screen and (max-width: 967px) {
            left: 0;
            display: flex;
            justify-content: center;
        }

        &::before {
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 1000%;
            height: 100%;
            background-color: #fff500;

            @media screen and (max-width: 967px) {
                left: -1000px;
            }
        }

        img {
            width: 515px;
            height: auto;
            position: relative;
            z-index: -1;

            @media screen and (min-width: 1800px) {
                width: 700px;
            }

            @media screen and (min-width: 2200px) {
                width: 1200px;
            }

            @media screen and (max-height: 600px) {
                width: 400px;
            }
        }
    }

    &__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
        margin-bottom: 10px;
        letter-spacing: 3px;

        @media screen and (min-width: 2200px) {
            font-size: 54px;
        }

        @media screen and (max-width: 667px) {
            font-size: 28px;
        }
    }

    &__text {
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 20px;

        @media screen and (min-width: 2200px) {
            font-size: 27px;
        }

        @media screen and (max-width: 667px) {
            font-size: 16px;
        }

        span {
            color: #bd00ff;
            font-weight: 700;
        }
    }
}
</style>
