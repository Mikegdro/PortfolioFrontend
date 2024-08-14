
<script setup lang="ts">

    import { ref } from 'vue';

    import { useFetch } from '@vueuse/core';

    import type { Experience } from '../../types';

    import ExperienceCard from '../UI/ExperienceCard.vue'

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
    <section class="lg:px-52 md:px-24 sm:px-14 px-5 bg-base-100 pb-16">
        <h2 class="text-3xl box text-center">Experience</h2>
        
        <div v-if="experiences" class="content pt-10 flex flex-col">
            <template v-for="(experience, index) in experiences" :key="experience.id">
                <ExperienceCard v-bind="experience" :data-index="index"/>
            </template>
        </div>
        
    </section>
</template>