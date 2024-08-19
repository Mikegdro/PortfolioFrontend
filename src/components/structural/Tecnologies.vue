<script setup lang="ts">

    import { ref } from 'vue';

    import { gsap } from 'gsap'

    import { useFetch } from '@vueuse/core';

    import type { Tecnologies } from '../../types';

    import TecnologyCard from '../UI/TecnologyCard.vue';

    const tecnologies = ref<Tecnologies[]>([])
    const err = ref(false)
    const loading = ref(true)

    async function loadData() {
        const { isFetching, error, data } = await useFetch(`${import.meta.env.PUBLIC_API}/api/tecnologies`).get().json()

        err.value = error.value
        loading.value = isFetching.value
        tecnologies.value = data.value
    }

    loadData()

    const activeTab = ref<"frontend" | "backend" | "devops">("frontend");

    /**
     *  Event handler for when the user changes a tab.
     * 
     *  @param ev 
     */
    async function changeTab ( ev: MouseEvent ) {

        // Calls the animation function
        tabAnimation(() => {
            const target = ev.target as HTMLElement
            const id = target.getAttribute('id')

            if (id != null && id === 'frontend' || id === 'backend' || id === 'devops') {
                activeTab.value = id
            }
        })

    }

    /**
     *  Animation for changing tabs.
     */
    function tabAnimation (cb: () => void) {
        // Timeline for the animation
        const tl = gsap.timeline()


        // Move in the container
        tl.to('.animation', {
            zIndex: 40,
            duration: 0
        })

        // Move columns out
        tl.to('.col', {
            x: -1500,
            duration: 0,
        })

        // Columns appear
        tl.to('.col', {
            opacity: 1,
            x: 0,
            stagger: {
                each: .2
            },
            onComplete: cb
        })

        // Columns dissapear
        tl.to('.col', {
            opacity: 0,
            x: 1500,
            stagger: {
                each: .2
            }
        })

        // Move back the container
        tl.to('.animation', {
            zIndex: 0,
            duration: 0
        })

    }

</script>

<template>
    <section class="lg:px-52 md:px-24 sm:px-14 px-5 bg-base-100 py-16">
        <h1 class="text-5xl text-center">Tecnologies</h1>
        <div v-if="tecnologies" class="pt-10 flex flex-col gap-5">
            <div role="tablist" class="tabs tabs-boxed mt-5 bg-base-200">
                <a id="frontend" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'frontend' }" @click="changeTab">Front-end</a>
                <a id="backend" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'backend' }" @click="changeTab">Back-end</a>
                <a id="devops" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'devops' }" @click="changeTab">Devops</a>
            </div>

            <div v-if="tecnologies" class="content relative bg-base-200 rounded-lg columns py-10">

                <div class="animation absolute left-0 w-full h-full z-0 flex flex-col">
                    <div class="col bg-primary flex-1 opacity-0"></div>
                    <div class="col bg-base-300 flex-1 opacity-0"></div>
                    <div class="col bg-primary flex-1 opacity-0"></div>
                    <div class="col bg-base-300 flex-1 opacity-0"></div>
                    <div class="col bg-primary flex-1 opacity-0"></div>
                </div>

                <template v-for="(tecnology, index) in tecnologies" :key="tecnology.id">
                    <TecnologyCard v-if="tecnology.type === activeTab" v-bind="tecnology" :data-index="index" />
                </template>
            </div>
            
        </div>
        <div v-if="loading">
            <div class="loading"></div>
        </div>
        <div v-if="err">
            Sorry we couldn't load the data
        </div>
    </section>
    
</template>