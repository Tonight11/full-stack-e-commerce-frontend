<template>
    <!-- SVG for dekstop ver -->
    <svg
        v-if="isLargeScreen"
        class="advantage__anim"
        viewBox="0 0 1093 782"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path class="line line1" d="M1089.5 258H30" stroke="black" />
        <path
            class="line line2"
            d="M33 406C890.845 406.416 1097.06 406.516 1092.94 406.514"
            stroke="black"
        />
        <path
            class="line line3"
            d="M30 568.5C887.845 568.916 1094.06 569.016 1089.94 569.014"
            stroke="black"
        />
        <path
            class="line line4"
            d="M26 706.5C883.845 706.916 1090.06 707.016 1085.94 707.014"
            stroke="black"
        />
        <path
            class="main-line"
            ref="mainLine"
            d="M37.5 2C257.5 3.83333 769.5 51.3855 932 255C973.5 307 857.3 457.8 522.5 399C104 325.5 37.5 511.5 37.5 561.5C37.5 611.5 360 919 959 704.5"
            stroke="#BD00FF"
            stroke-width="3"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
            }"
            ref="circle1"
            class="circle1"
            cx="927.5"
            cy="257.5"
            r="40"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
            }"
            ref="circle2"
            class="circle2"
            cx="556.5"
            cy="403"
            r="40"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
            }"
            ref="circle3"
            class="circle4"
            cx="37.5"
            cy="568"
            r="40"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
            }"
            ref="circle4"
            class="circle3"
            cx="958.5"
            cy="705"
            r="40"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />

        <text
            :class="{
                'text-svg': ($route.name = 'home'),
            }"
            class="text1"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="20"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="46" y="248.17">Delivery</tspan>
        </text>
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
            }"
            class="text2"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="20"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="43.3965" y="396.17">Sale</tspan>
        </text>
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
            }"
            class="text3"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="20"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="1010.14" y="558.17">Quality</tspan>
        </text>
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
            }"
            class="text4"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="20"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="46" y="696.17">Feedback</tspan>
        </text>
    </svg>
    <!-- SVG for mobile ver -->
    <svg
        v-else
        class="mobile__anim"
        viewBox="0 0 665 1044"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M204 12V994" stroke="#BD00FF" stroke-width="5" />
        <path d="M665 319L0 319" stroke="black" />
        <path d="M665 544L0 544" stroke="black" />
        <path d="M665 994L0 994" stroke="black" />
        <path d="M665 769L0 769" stroke="black" />
        <circle
            :class="{
                circle: ($route.name = 'home'),
                mobileCircle1: true,
            }"
            cx="204"
            cy="319"
            r="49"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
                mobileCircle2: true,
            }"
            cx="204"
            cy="544"
            r="49"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
                'mobile-text1': true,
            }"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="30"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="4.44922" y="309.255">Delivery</tspan>
        </text>
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
                'mobile-text2': true,
            }"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="30"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="2.34473" y="536.255">Sale</tspan>
        </text>
        <text
            :class="{
                'text-svg': ($route.name = 'home'),
                'mobile-text3': true,
            }"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="30"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="3.46387" y="759.255">Quality</tspan>
        </text>

        <text
            :class="{
                'text-svg': ($route.name = 'home'),
                'mobile-text4': true,
            }"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Montserrat"
            font-size="30"
            font-weight="500"
            letter-spacing="0em"
        >
            <tspan x="5.30762" y="984.255">Feedback</tspan>
        </text>
        <circle
            :class="{
                circle: ($route.name = 'home'),
                mobileCircle3: true,
            }"
            cx="204"
            cy="769"
            r="49"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
        <circle
            :class="{
                circle: ($route.name = 'home'),
                mobileCircle4: true,
            }"
            cx="204"
            cy="994"
            r="49"
            fill="#FFF500"
            stroke="black"
            stroke-width="2"
        />
    </svg>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { useDesktopAnim } from '@/use/useDesktopAnim'

const isLargeScreen = useMediaQuery('(min-width: 768px)')
const circle1 = ref()
const circle2 = ref()
const circle3 = ref()
const circle4 = ref()

onMounted(() => {
    useDesktopAnim(circle1.value, circle2.value, circle3.value, circle4.value)
})
</script>

<style lang="scss">
.advantage__anim {
    overflow: visible;
    max-width: 1093px;
    height: auto;
}

.circle {
    cursor: pointer;
}

.mobile-group {
    opacity: 0;
    transform: translateX(100px);
}

.text-svg {
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 457px) {
        font-size: 26px;
    }
}
</style>
