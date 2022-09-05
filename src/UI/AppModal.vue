<template>
    <div class="modal">
        <div class="modal-shadow" v-if="modal"></div>
        <div class="modal__content">
            <div class="modal__close" v-if="modal">X</div>
            <request-modal title="Callback"></request-modal>
        </div>
    </div>
</template>

<script setup>
import RequestModal from '@/components/request/RequestModal'
import {defineProps} from "vue";


defineProps({
    modal: Boolean
})
</script>

<style lang="scss">

.modal {
    max-width: 470px;
    &__content {
        background: #FFFFFF;
        box-shadow: 0px 5px 35px 3px rgba(0, 0, 0, 0.25);
        padding: 20px 20px 55px;


    }
}
</style>