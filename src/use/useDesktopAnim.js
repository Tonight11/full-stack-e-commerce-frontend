import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import {DrawSVGPlugin} from "@/use/DrawSVGPlugin";
import MotionPath from "gsap/MotionPathPlugin"
import {onMounted, ref} from "vue";

export function useDekstopAnim() {
    const pulses = gsap.timeline({
        defaults: {
            scale: 1.5,
            autoAlpha: 1,
            transformOrigin: 'center',
            ease: "elastic(2.5, 1)"
        }
    })
        .to(".circle1, .text1", {}, 1.55)
        .to(".circle2, .text2", {}, 2.3)
        .to(".circle4, .text3", {}, 3.3)
        .to(".circle3, .text4", {}, 4.99)
    const advanTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__anim',
            start: "top 30%",
            markers: true
        },
        defaults: {ease: 'none', duration: 5}
    })
    advanTl
        .to('.circle5', {
            autoAlpha: 1,
            duration: 1
        })
        .from(mainLine.value, {
            drawSVG: 0,
        }, 0)
        .to('.circle5', {
            motionPath: {
                path: mainLine.value,
                align: mainLine.value,
                alignOrigin: [0.5, 0.5]
            }
        }, 0)
        .to('.circle5', {
            autoAlpha: 0,
            duration: 0
        })
        .add(pulses, 0)
}