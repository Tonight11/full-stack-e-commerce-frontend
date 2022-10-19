<template>
    <div class="modal" ref="defModal">
        <div class="modal__content">
            <request-modal title="Callback"></request-modal>
        </div>
    </div>
</template>

<script setup>
import RequestModal from '@/components/request/RequestModal'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const defModal = ref()

onMounted(() => {
    gsap.timeline({
        scrollTrigger: {
            trigger: defModal.value,
            start: 'top 65%',
        },
        defaults: { duration: 1 },
    })
        .from(defModal.value, {
            x: 100,
            opacity: 0,
        })
        .from(
            '.contact__man',
            {
                x: -100,
                opacity: 0,
            },
            0
        )
})
</script>

<style lang="scss">
.modal {
    max-width: 470px;

    @media screen and (max-width: 992px) {
        margin: 0 auto;
    }
    &__content {
        background: #ffffff;
        box-shadow: 0px 5px 35px 3px rgba(0, 0, 0, 0.25);
        padding: 20px 20px 55px;
    }
}
</style>
