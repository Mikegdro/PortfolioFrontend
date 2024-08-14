
import { useIntersectionObserver } from "@vueuse/core";

import { gsap } from "gsap";

export function useScrollAnimation (element: HTMLElement) {

    const observer = useIntersectionObserver(element, ([{isIntersecting}]) => {

        console.log(element)

        if (isIntersecting) {
            onEnter(element)
        } else {
            onLeave(element)
        }
    })

    function onEnter(el: HTMLElement) {

        const delay: number = el.dataset.index ? Number(el.dataset.index) : 0

        gsap.to(el, {
            opacity: 1,
            duration: .3,
            y: 0,
            delay: .15 * delay
        })
    }

    function onLeave(el: HTMLElement) {
        gsap.to(el, {
            opacity: 0,
            y: 150
        })
    }

}