import { useBurgerStore } from '@/store/burgerStore'

export function useHandleLink() {
    const burger = useBurgerStore()
    const link = () => {
        if (burger.isActive === true) {
            burger.toggle()
        }
    }

    const add = () =>
        document.querySelectorAll('a').forEach((i) => {
            i.addEventListener('click', link)
        })

    const remove = () =>
        document.querySelectorAll('a').forEach((i) => {
            i.removeEventListener('click', link)
        })

    return {
        add,
        remove,
    }
}
