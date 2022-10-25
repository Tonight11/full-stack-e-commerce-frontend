import { watch } from 'vue'
import { useElementHover } from '@vueuse/core/index'
import { useHoverStore } from '@/store/hoverStore'


export function useDesktopAnim(...circles) {
    //using vueUse so we can watch is element is hovered
    const isCircleOneHovered = useElementHover(circles[0])
    const isCircleTwoHovered = useElementHover(circles[1])
    const isCircleThirdHovered = useElementHover(circles[2])
    const isCircleFourthHovered = useElementHover(circles[3])

    const hoverStore = useHoverStore()

    // changing hoverStore and provide it in RequestAdvantage
    watch(
        [
            isCircleOneHovered,
            isCircleTwoHovered,
            isCircleThirdHovered,
            isCircleFourthHovered,
        ],
        () => {
            if (isCircleOneHovered.value) {
                hoverStore.hover = 1
            } else if (isCircleTwoHovered.value) {
                hoverStore.hover = 2
            } else if (isCircleThirdHovered.value) {
                hoverStore.hover = 3
            } else if (isCircleFourthHovered.value) {
                hoverStore.hover = 4
            } else {
                hoverStore.hover = 0
            }
        }
    )
}
