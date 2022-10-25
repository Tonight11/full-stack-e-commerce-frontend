<template>
    <div class="sub">
        <div class="sub__inner">
            <div class="sub__info">
                <div class="sub__title">
                    Discover our latest product <br />
                    just by clicking the button
                </div>
                <div class="sub__btn">
                    <app-button
                        text="Subscribe"
                        small
                        @click="visibleModal = true"
                    ></app-button>
                </div>
                <teleport to="body">
                    <app-popup
                        @close="visibleModal = false"
                        :visible="visibleModal"
                    >
                        <app-input place="Email"></app-input>
                        <app-button text="Subscribe"></app-button>
                    </app-popup>
                </teleport>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppButton from '@/UI/AppButton'
import AppInput from '@/UI/AppInput.vue'
import AppPopup from '@/UI/AppPopup.vue'
import { ref } from 'vue'

const visibleModal = ref(false)
</script>

<style lang="scss">
.sub {
    padding-top: 140px;

    @media screen and (max-width: 827px) {
        padding-top: 60px;
    }

    &__inner {
        position: relative;
        background-image: url('@/assets/img/sub.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 30vh 0 28vh;

        position: relative;

        @media screen and (max-width: 827px) {
            padding: 70px 0;
        }

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: black;
            opacity: 0.45;
        }
    }

    &__info {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 827px) {
            gap: 20px;
        }

        @media screen and (max-width: 827px) {
            padding: 0 10px;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 42px;
        line-height: 59px;
        text-transform: uppercase;

        padding: 40px 0 0 40px;
        color: #ffffff;

        margin-bottom: 60px;

        @media screen and (min-width: 1800px) {
            font-size: 70px;
            line-height: normal;
            padding: 0 0 0 20px;
        }

        @media screen and (max-width: 827px) {
            font-size: 28px;
            line-height: normal;
            padding: 0;
            margin: 0;
        }

        @media screen and (max-width: 827px) {
            font-size: 32px;
            text-align: center;
        }
    }
}
</style>
