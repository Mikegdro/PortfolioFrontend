<script setup lang="ts">

    import gsap from 'gsap'

    import { ref, TransitionGroup } from 'vue'

    import { vIntersectionObserver } from '@vueuse/components'

    const { className, direction } = defineProps<{ className: string | null, direction: "left" | "right" }>()

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    const isVisible = ref<boolean>(false)

    function beforeEnter (el: any) {

        const element = el as HTMLElement

        const animation = direction === 'left' ? 'translateX(-1000px)' : 'translateX(+1000px)'

        element.style.transform = animation
        element.style.opacity = '0'
    }

    function enter (el: any, done: any) {
        gsap.to(el, {
            opacity: 1,
            duration: .4,
            x: 0,
            onComplete: done,
            delay: .3 * el.dataset.index
        })
    }
</script>

<template>
    <Suspense>
        <TransitionGroup
            :appear="true"
            v-intersection-observer="onIntersectionObserver"
            name="slide"
            @before-enter="beforeEnter"
            @enter="enter"
            tag="div"
            :class="className"
        >
            <slot v-if="isVisible"/>
        </TransitionGroup>
    </Suspense>
</template>