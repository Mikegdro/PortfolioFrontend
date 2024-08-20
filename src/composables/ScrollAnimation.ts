
import { useIntersectionObserver } from "@vueuse/core";

import { gsap } from "gsap";

/**
 *  Composable to reuse the scroll animation, it needs an HTMLElement as an input, and it'll observe that element and execute the Animation.
 * 
 *  @param element 
 */
export function useScrollAnimation (element: HTMLElement) {

    /**
     *  Hook from VueUse to abstract the intersection observer.
     */
    const { pause } = useIntersectionObserver(element, ([{isIntersecting}]) => {

        console.log(element, isIntersecting)

        if (isIntersecting) {
            pause()
            onEnter(element)
        } 

    })

    /**
     *  OnEnter Slide Animation with GSAP
     * 
     *  @param el 
     */
    function onEnter(el: HTMLElement) {

        const delay: number = el.dataset.index ? Number(el.dataset.index) : 0

        const tl = gsap.timeline()

        // tl.to(element, {
        //     opacity: 0,
        //     duration: 0
        // })
        
        tl.to(element, {
            opacity: 1,
            duration: 0.2,
            delay: delay * .15
        })
    }

}