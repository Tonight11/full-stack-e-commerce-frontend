<template>
    <section class="brand">
        <div class="brand__inner">
            <swiper
                class="brand__slide brand__slide-t"
                @swiper="Swiper"
                @slideChange="SwiperSlide"
                :slidesPerView="9"
                :freeMode="true"
                :allow-touch-move="false"
                :autoplay="{
                    delay: 1,
                    disableOnInteraction: true,
                }"
                :loop="true"
                :speed="1000"
                :modules="modules"
            >
                <swiper-slide class="brand__img">
                    <img src="../assets/img/nike.svg" alt="nike" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/louis.svg" alt="louis" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot2"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/fendi.svg" alt="fendi" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/guchi.svg" alt="guchi" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot2"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/ax.svg" alt="ax" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot3"></div>
                </swiper-slide>
            </swiper>
            <swiper
                class="brand__slide"
                @swiper="Swiper"
                @slideChange="SwiperSlide"
                dir="rtl"
                :slidesPerView="9"
                :freeMode="true"
                :allow-touch-move="false"
                :autoplay="{
                    delay: 1,
                    disableOnInteraction: true,
                }"
                :loop="true"
                :speed="1000"
                :modules="modules"
            >
                <swiper-slide class="brand__img">
                    <img src="../assets/img/ax.svg" alt="ax" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot2"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/guchi.svg" alt="guchi" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/fendi.svg" alt="fendi" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot2"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/louis.svg" alt="louis" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot"></div>
                </swiper-slide>
                <swiper-slide class="brand__img">
                    <img src="../assets/img/nike.svg" alt="nike" />
                </swiper-slide>
                <swiper-slide>
                    <div class="dot dot3"></div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

const modules = [Autoplay, FreeMode]
</script>

<style lang="scss">
.swiper {
    pointer-events: none !important;
}

.swiper-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-timing-function: linear !important;
}

.brand__slide-t {
    margin-bottom: 60px;
}

.brand {
    padding-top: 50px;

    .brand__inner {
    }

    &__slide {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:last-child {
            flex-direction: row-reverse;
        }
    }

    &__img {
        width: 200px !important;
        max-width: 100%;

        @media screen and (max-width: 600px) {
            width: 150px !important;
        }
    }
}

.dot {
    width: 12.5px;
    height: 12.5px;
    border-radius: 50%;
    background: black;
    margin: 0 auto;

    &.dot2 {
        background: transparent;
        border: 1px solid black;
    }

    &.dot3 {
        background: #bd00ff;
    }
}
</style>
