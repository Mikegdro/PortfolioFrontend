<script setup lang="ts">

    import { useFetch } from '@vueuse/core';

    import { ref } from 'vue';

    import { type Project } from '../../types';

    import ProjectCard from '../UI/ProjectCard.vue';
    import Columns from '../UI/Columns.vue';

    const projects = ref<Project[]>([]);
    const err = ref();
    const loading = ref<boolean>(true);

    async function loadData() {
        const { isFetching, error, data } = await useFetch(`${import.meta.env.PUBLIC_API}/api/projects`).get().json()
        projects.value = data.value
        err.value = error.value
        loading.value = isFetching.value
    }

    loadData();

</script>

<template>
    <section>
        <h2 class="text-3xl">Projects</h2>
        <div v-if="projects">
            <Columns direction="left">
                <template v-for="(project, index) in projects" :key="project.id" >
                    <ProjectCard v-bind="project" :data-index="index" />
                </template>
            </Columns>
        </div>
        <div v-if="loading">
            <div class="loading"></div>
        </div>
        <div v-if="err">
            Sorry we couldn't load the data
        </div>
    </section>
</template>