<template>
    <div class="contact">
        <app-title title="Contact"></app-title>
        <div class="contact__main">
            <app-page>
                <div class="contact__inner">
                    <div class="contact__info">
                        <div class="contact__modal">
                            <app-modal :modal="true"></app-modal>
                        </div>
                        <div class="contact__icons">
                            <tele-icon class="contact__icon-item"></tele-icon>
                            <vk-icon class="contact__icon-item"></vk-icon>
                            <inst-icon class="contact__icon-item"></inst-icon>
                        </div>
                        <a href="tel:+79067886574" class="contact__phone"
                            >+7(906)-788-65-74</a
                        >
                    </div>
                    <img
                        class="contact__man"
                        src="../assets/img/man.png"
                        alt="man"
                    />
                </div>
            </app-page>
        </div>
    </div>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppTitle from '@/UI/AppTitle'
import AppModal from '@/components/TheContactModal.vue'
import TeleIcon from '@/icons/TeleIcon'
import InstIcon from '@/icons/InstIcon'
import VkIcon from '@/icons/VkIcon'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const secondTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact__icons',
            start: 'top 90%',
        },
        defaults: { duration: 0.5 },
    })
    secondTl
        .from('.contact__icon-item', {
            y: 35,
            opacity: 0,
            stagger: 0.1,
        })
        .from('.contact__phone', {
            x: -50,
            opacity: 0,
        })
})
</script>

<style lang="scss">
.contact {
    padding-top: 140px;

    @media screen and (max-width: 992px) {
        padding-top: 50px;
    }

    &__main {
        background-image: url('../assets/img/contact.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 104px 0 60px;

        position: relative;

        @media screen and (max-width: 992px) {
            padding: 40px 0;
            text-align: center;
        }
    }

    &__modal {
        margin-bottom: 40px;

        @media screen and (max-width: 992px) {
            margin: 0 auto 40px;
        }
    }

    &__icons {
        display: flex;
        align-items: center;

        gap: 20px;
        margin-bottom: 25px;

        @media screen and (max-width: 992px) {
            justify-content: center;
        }
    }

    &__icon-item {
        cursor: pointer;
    }

    &__phone {
        font-weight: 700;
        font-size: 24px;

        color: #000000;
        text-decoration: none;
        display: inline-block;
    }

    &__man {
        position: absolute;
        bottom: 0;
        right: 10%;
        object-fit: contain;

        @media screen and (max-width: 992px) {
            display: none;
        }
    }
}
</style>
