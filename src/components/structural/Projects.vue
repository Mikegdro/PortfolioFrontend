<script setup lang="ts">

    import { useFetch } from '@vueuse/core';

    import { ref, onMounted } from 'vue';

    import ScrollAnimation from '../animation/ScrollAnimation.vue'

    import { type Project } from '../../types';

    import ProjectCard from '../UI/ProjectCard.vue';

    const projects = ref<Project[]>([]);
    const err = ref();
    const loading = ref<boolean>(true);
    const hi = 'hi'

    async function loadData() {
        const { isFetching, error, data } = await useFetch(`${import.meta.env.PUBLIC_API}/api/projects`).get().json()
        projects.value = data.value
        err.value = error.value
        loading.value = isFetching.value
    }

    loadData();

</script>

<template>
    <section class="lg:px-28 md:px-16 sm:px-10 px-5 bg-base-100 py-16">
        <h2 class="text-3xl text-center">Projects</h2>
        <div v-if="projects" class="pt-10 content columns">
            <template v-for="(project, index) in projects" :key="project.id" >
                <ProjectCard v-bind="project" :data-index="index" />
            </template>
        </div>
        <div v-if="loading">
            <div class="loading"></div>
        </div>
        <div v-if="err">
            Sorry we couldn't load the data
        </div>
    </section>
</template>