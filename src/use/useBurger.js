import { ref } from 'vue'

export function useMobileBurger() {
    const isActive = ref(false)

    const toggle = () => {
        isActive.value = !isActive.value

        document.body.classList.toggle('lock')
    }

    return {
        isActive,
        toggle,
    }
}
