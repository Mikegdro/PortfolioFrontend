<script setup lang="ts">

    import { ref, reactive, watch, onMounted } from 'vue'

    import { vIntersectionObserver } from '@vueuse/components'

    import Linkedin from '../../icons/Linkedin.vue'
    import Github from '../../icons/Github.vue'

    const isVisible = ref(false)

    const isVisibleClass = reactive({
        show: isVisible
    })

    const loaded = ref(false)
    const imgRef = ref(null)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    function loadedImg() {
        loaded.value = true
    }

    onMounted(() => {
        if (imgRef.value != null) {
            const elem = imgRef.value as HTMLImageElement
            if (elem.complete) {
                loadedImg()
            } else {
                elem.addEventListener("load", () => {
                    loadedImg()
                })
            }
        }
    })
    
    const bg = reactive({
        backgroundImage: 'url(/assets/reduced.webp)'
    })


</script>

<template>
    <section class="hero min-h-screen m-auto bg-fixed" :style="bg" :class="{ loaded: loaded }" v-intersection-observer="onIntersectionObserver">
        <img ref="imgRef" src="assets/full.webp" loading="lazy" class="h-screen object-cover fixed" alt="background image of a forest."/>
        <div class="hero-overlay bg-stone-800 bg-opacity-60"></div>
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold scroll-animation left-animation" :class="isVisibleClass">Miguel
                    García del Real Ortiz</h1>
                <p class="mb-5 scroll-animation left-animation" :class="isVisibleClass">Full-stack Software
                    Engineer</p>

                <div class="flex gap-5 items-center justify-around">
                    <span class="scroll-animation left-animation child-animation" :class="isVisibleClass">
                        <a class="btn btn-outline" href="MiguelGDRO_CV.pdf" download>CV</a>
                    </span>
                    <span class="scroll-animation left-animation child-animation" :class="isVisibleClass">
                        <Github :link="'https://github.com/Mikegdro'" />
                    </span>
                    <span class="scroll-animation left-animation child-animation" :class="isVisibleClass">
                        <Linkedin :link="'https://linkedin.com/in/mgdro'" />
                    </span>
                </div>

            </div>
        </div>
    </section>
</template>

<style is:inline>

    .hero {
        clip-path: inset(0);
    }

    .hero:not(.loaded) .hero-overlay {
        backdrop-filter: blur(64px) opacity(1);
    }

    .hero.loaded .hero-overlay {
        transition: backdrop-filter 1s;
        backdrop-filter: blur(64px) opacity(0);
    }

    div.max-w-md>* {
        font-family: 'Poppins';
        font-weight: 800;

        filter: drop-shadow(0px 0px 20px rgb(161, 161, 161));

    }

    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        .hero {
            background-attachment: initial;
        }

    }
</style>