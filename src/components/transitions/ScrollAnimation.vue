<script setup lang="ts">

    import gsap from 'gsap'

    import { ref, Transition } from 'vue'

    import { vIntersectionObserver } from '@vueuse/components'

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    const isVisible = ref<boolean>(false)

    function beforeEnter (el: any) {
        const element = el as HTMLElement
        element.style.transform = 'translateX(-160px)'
        element.style.opacity = '0'
    }

    function enter (el: any, done: any) {
        gsap.to(el, {
            opacity: 1,
            duration: 1,
            x: 0,
            onComplete: done,
        })
    }
</script>

<template>
    <Transition
        v-intersection-observer="onIntersectionObserver"
        name="slide"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
    >
        <slot v-if="isVisible"/>
    </Transition>

</template>