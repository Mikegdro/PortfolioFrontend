<script setup lang="ts">

    import gsap from 'gsap'

    import { ref, TransitionGroup, watch, type Ref } from 'vue'

    import { useElementVisibility } from '@vueuse/core'

    const target = ref(null)
    const isVisible = useElementVisibility(target)

    const { direction } = defineProps<{ direction: "left" | "right" }>()

    function beforeEnter (el: any) {

        const animation = direction === 'left' ? 'translateX(-1000px)' : 'translateX(+1000px)'

        const element = el as HTMLElement

        element.style.transform = animation
        element.style.opacity = '0'

    }

    function enter (el: any, done: any) {

        const elem = el as HTMLElement

        gsap.to(elem, {
            opacity: 1,
            duration: .4,
            x: 0,
            ease: "none",
            delay: .15 * el.dataset.index,
            onComplete: done,
        })

    }

    function leave (el: any, done: any) {

        const leaveAnimation = direction === 'left' ? -5600 : +5600 ;

        const elem = el as HTMLElement

        gsap.to(elem, {
            opacity: 0,
            duration: .2,
            x: leaveAnimation,
            onComplete: done,
        })

    }

</script>

<template>
    <section ref="target" class="parent mt-10 grid grid-cols-1 px-5 sm:px-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-16">
        <TransitionGroup
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            v-if="isVisible"
        >
            <slot  />

        </TransitionGroup>
    </section>
</template>