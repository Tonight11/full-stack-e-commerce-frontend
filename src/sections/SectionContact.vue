<template>
    <div class="contact">
        <app-title title="Contact"></app-title>
        <div class="contact__main">
            <app-page>
                <div class="contact__info">
                    <div class="contact__modal">
                        <app-modal></app-modal>
                    </div>
                    <div class="contact__icons">
                        <tele-icon class="contact__icon"></tele-icon>
                        <vk-icon class="contact__icon"></vk-icon>
                        <inst-icon class="contact__icon"></inst-icon>
                    </div>
                    <a href="tel:+79067886574" class="contact__phone">+7(906)-788-65-74</a>
                </div>
                <img class="contact__man" src="../assets/img/man.png" alt="man">
            </app-page>
        </div>
    </div>
</template>

<script setup>

import AppPage from "@/UI/AppPage"
import AppTitle from "@/UI/AppTitle"
import AppModal from '@/UI/AppModal'
import TeleIcon from "@/icons/TeleIcon"
import InstIcon from "@/icons/InstIcon"
import VkIcon from "@/icons/VkIcon"

</script>

<style lang="scss">

.contact {
    padding-top: 140px;


    &__main {
        background-image: url('../assets/img/contact.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 104px 0 60px;

        position: relative;
    }

    &__modal {
        margin-bottom: 40px;
    }

    &__icons {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 25px;
    }

    &__icon {
        cursor: pointer;
    }

    &__phone {
        font-weight: 700;
        font-size: 24px;

        color: #000000;
        text-decoration: none;
    }

    &__man {
        position: absolute;
        bottom: 0;
        right: 10%;
        object-fit: contain;
    }
}

</style>