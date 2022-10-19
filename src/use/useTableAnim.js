import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from '@/use/DrawSVGPlugin'
import MotionPath from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPath)

export function useTableAnim(mainLine) {
    // animation
    const pulses = gsap
        .timeline({
            defaults: {
                scale: 1.2,
                autoAlpha: 1,
                transformOrigin: 'center',
                ease: 'elastic(4, 1)',
            },
        })
        .to('.mobileCircle1, .mobile-text1', {}, 1.55)
        .to('.mobileCircle2, .mobile-text2', {}, 2.65)
        .to('.mobileCircle3, .mobile-text3', {}, 3.8)
        .to('.mobileCircle4, .mobile-text4', {}, 4.99)

    const textContent = gsap
        .timeline({
            defaults: {
                translateX: 0,
                autoAlpha: 1,
                transformOrigin: 'center',
                ease: 'elastic(2, 1)',
            },
        })
        .to('.mobile-group1', {}, 1.55)
        .to('.mobile-group2', {}, 2.65)
        .to('.mobile-group3', {}, 3.8)
        .to('.mobile-group4', {}, 4.99)
    const advanTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mobile__anim',
            scrub: true,
            start: 'top 70%',
            end: 'bottom center',
        },
        defaults: { ease: 'none', duration: 5 },
    })
    advanTl
        .to('.main-mobile-circle', {
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
            '.main-mobile-circle',
            {
                motionPath: {
                    path: mainLine,
                    align: mainLine,
                    alignOrigin: [0.5, 0.5],
                },
            },
            0
        )
        .to('.main-mobile-circle', {
            autoAlpha: 0,
            duration: 0,
        })
        .add(pulses, 0)
        .add(textContent, 0)

    // return to AdvantageIcon
    return {
        pulses,
        advanTl,
    }
}
