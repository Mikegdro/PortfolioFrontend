<script setup lang="ts">

    import { useFetch } from '@vueuse/core';

    import { ref } from 'vue';

    import { type Project } from '../../types';

    import ProjectCard from '../UI/ProjectCard.vue';
    import Columns from '../UI/Columns.vue';

    import { vIntersectionObserver } from '@vueuse/components'

    const isVisible = ref(false)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

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
            <Columns v-intersection-observer="onIntersectionObserver">
                <div v-for="project in projects" :key="project.id" class="scroll-animation left-animation child-animation" :class="{ show: isVisible }" >
                    <ProjectCard v-bind="project" />
                </div>
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