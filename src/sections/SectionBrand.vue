<template>
    <section class="brand">
        <div class="brand__inner">
            <div class="brand__slide">
                <div class="brand__img">
                    <img src="../assets/img/nike.svg" alt="nike">
                </div>
                <div class="dot"></div>
                <div class="brand__img">
                    <img src="../assets/img/louis.svg" alt="louis">
                </div>
                <div class="dot dot2"></div>
                <div class="brand__img">
                    <img src="../assets/img/fendi.svg" alt="fendi">
                </div>
                <div class="dot"></div>
                <div class="brand__img">
                    <img src="../assets/img/guchi.svg" alt="guchi">
                </div>
                <div class="dot dot2"></div>
                <div class="brand__img">
                    <img src="../assets/img/ax.svg" alt="ax">
                </div>

            </div>
            <div class="brand__slide">
                <div class="brand__img">
                    <img src="../assets/img/nike.svg" alt="nike">
                </div>
                <div class="dot"></div>
                <div class="brand__img">
                    <img src="../assets/img/louis.svg" alt="louis">
                </div>
                <div class="dot dot2"></div>
                <div class="brand__img">
                    <img src="../assets/img/fendi.svg" alt="fendi">
                </div>
                <div class="dot"></div>
                <div class="brand__img">
                    <img src="../assets/img/guchi.svg" alt="guchi">
                </div>
                <div class="dot dot2"></div>
                <div class="brand__img">
                    <img src="../assets/img/ax.svg" alt="ax">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">

.brand {
    padding-top: 100px;

    .brand__inner {
        display: flex;
        flex-direction: column;
        gap: 70px;
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
        width: 200px;
        max-width: 100%;
    }
}

.dot {
    width: 12.5px;
    height: 12.5px;
    border-radius: 50%;
    background: black;

    &.dot2 {
        background: transparent;
        border: 1px solid black;
    }
}


</style>