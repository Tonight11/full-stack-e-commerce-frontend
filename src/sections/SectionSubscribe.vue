<template>
    <div class="sub">
        <div class="sub__inner">
            <div class="sub__info">
                <div class="sub__title">Discover our latest product <br> just by clicking the button</div>
                <div class="sub__btn">
                    <app-button text="Subscribe" small></app-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import AppButton from "@/UI/AppButton"

</script>

<style lang="scss">


.sub {
    padding-top: 140px;

    &__inner {
        position: relative;
        background-image: url("@/assets/img/sub.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 30vh 0 28vh;

        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: black;
            opacity: 0.2;
        }
    }


    &__info {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__title {
        font-weight: 700;
        font-size: 42px;
        line-height: 59px;
        text-transform: uppercase;

        padding: 40px 0 0 40px;
        color: #FFFFFF;

        margin-bottom: 60px;
    }
}
</style>