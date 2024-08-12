
<script setup lang="ts">

    import { ref } from 'vue';

    import { vIntersectionObserver } from '@vueuse/components'
    import { useFetch } from '@vueuse/core';

    import type { Experience } from '../../types';

    import ExperienceCard from '../UI/ExperienceCard.vue'

    const isVisible = ref(false)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    const experiences = ref<Experience[]>([])
    const err = ref(false)
    const loading = ref(true)

    async function loadData() {
        const { isFetching, error, data } = await useFetch(`${import.meta.env.PUBLIC_API}/api/experiences`).get().json()

        err.value = error.value
        loading.value = isFetching.value
        experiences.value = data.value
    }

    loadData()
    

</script>

<template>
    <section>
        <h2 class="text-3xl box">Experience</h2>
        
        <div class="pt-5 flex flex-col" v-intersection-observer="onIntersectionObserver">
            <div v-if="experiences.length > 0" class="scroll-animation left-animation child-animation" :class="{ show: isVisible }">
                <ExperienceCard v-for="experience in experiences" v-bind="experience"/>
            </div>
        </div>
        
    </section>
</template>