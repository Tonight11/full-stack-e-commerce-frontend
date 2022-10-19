import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from '@/use/DrawSVGPlugin'
import MotionPath from 'gsap/MotionPathPlugin'
import { watch } from 'vue'
import { useElementHover } from '@vueuse/core/index'
import { useHoverStore } from '@/store/hoverStore'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPath)

export function useDesktopAnim(mainLine, ...circles) {
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

    // animations
    const pulses = gsap
        .timeline({
            defaults: {
                scale: 1.5,
                autoAlpha: 1,
                transformOrigin: 'center',
                ease: 'elastic(2.5, 1)',
            },
        })
        .to('.circle1, .text1', {}, 1.55)
        .to('.circle2, .text2', {}, 2.3)
        .to('.circle4, .text3', {}, 3.3)
        .to('.circle3, .text4', {}, 4.99)
    const advanTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__anim',
            start: 'top 50%',
        },
        defaults: { ease: 'none', duration: 5 },
    })
    advanTl
        .to('.circle5', {
            autoAlpha: 1,
            duration: 1,
        })
        .from(
            mainLine,
            {
                drawSVG: 0,
            },
            0
        )
        .to(
            '.circle5',
            {
                motionPath: {
                    path: mainLine,
                    align: mainLine,
                    alignOrigin: [0.5, 0.5],
                },
            },
            0
        )
        .to('.circle5', {
            autoAlpha: 0,
            duration: 0,
        })
        .add(pulses, 0)

    // returning to AdvantageIcon
    return {
        pulses,
        advanTl,
    }
}
