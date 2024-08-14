<script setup lang="ts">

    import { ref, reactive, onMounted } from 'vue'


    import Linkedin from '../../icons/Linkedin.vue'
    import Github from '../../icons/Github.vue'

    const loaded = ref(false)
    const imgRef = ref(null)

    const mobileRes = ref(false)

    function loadedImg() {
        loaded.value = true
    }

    onMounted(() => {

        if (window.innerWidth < 640) {
            mobileRes.value = true
            return
        }

        // Image loading for lazy loading with a cool effect
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
    <section class="hero min-h-screen m-auto bg-fixed" :style="bg" :class="{ loaded: loaded }">
        <img v-if="!mobileRes" ref="imgRef" src="assets/full.webp" loading="lazy" class="h-screen w-dvw object-cover fixed" alt="background image of a forest."/>
        <div class="hero-overlay bg-stone-800 bg-opacity-60"></div>
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Miguel García del Real Ortiz</h1>
                <p class="mb-5">Full-stack Software Engineer</p>               
                
                <div class="flex gap-5 items-center justify-around">
                    <a :key="'cv'" class="btn btn-outline" href="MiguelGDRO_CV.pdf" data-index="1" download>CV</a>
                    <Github :key="'gh'" :link="'https://github.com/Mikegdro'" data-index="2" />
                    <Linkedin :key="'lk'" :link="'https://linkedin.com/in/mgdro'" data-index="3" />
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
        backdrop-filter: blur(10px) opacity(1);
    }

    .hero.loaded .hero-overlay {
        transition: backdrop-filter 1s;
        backdrop-filter: blur(10px) opacity(0);
    }

    div.max-w-md > * {
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