<template>
    <section class="first">
        <app-page>
            <div class="first__inner">
                <div class="first__info">
                    <h1 class="first__title">Explore&Find your <br> favorite clothes</h1>
                    <div class="first__text">Our collection of clothes as well known <span>TH</span>, <br> will help you look
                        fresh and fashionable
                    </div>
                    <app-button text="Explore" big></app-button>
                </div>
                <div class="first__bg">
                    <img src="../assets/img/girl.png" alt="girl">
                </div>
            </div>
        </app-page>
    </section>
</template>

<script setup>
import AppPage from "@/UI/AppPage"
import AppButton from "@/UI/AppButton"
</script>

<style lang="scss">

.first {
    display: flex;
    align-items: center;
    &__inner {
        display: flex;
        align-items: center;
        min-height: 100vh;

    }

    &__info {
        width: 50%;
    }

    &__bg {
        position: relative;
        top: 0;
        left: -100px;

        &::before {
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 1000%;
            height: 100%;
            background-color: #FFF500;
        }

        img {
            width: 515px;
            height: auto;
            position: relative;
            z-index: -1;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 3vw;
        line-height: 130%;
        margin-bottom: 10px;
        letter-spacing: 3px;
    }

    &__text {
        font-size: 1.2vw;
        line-height: 150%;
        margin-bottom: 20px;

        span {
            color: #BD00FF;
            font-weight: 700;
        }
    }
}

</style>