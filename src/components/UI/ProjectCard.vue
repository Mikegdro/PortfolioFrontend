<script setup lang="ts">

    import { onMounted, ref } from 'vue'

    import { useScrollAnimation } from '../../composables/ScrollAnimation.ts'

    import { type  Project } from '../../types';

    const project = defineProps<Project>()

    const url = "/project/" + project.id

    const projectDescription = project.PersonalProject
        ? project.PersonalProject.title
        : project.PrivateProject?.title;

    const logo = project.PrivateProject != null && project.PrivateProject?.Company.logo != undefined ? project.PrivateProject.Company.logo : null
    const linkedin = project.PrivateProject != null && project.PrivateProject.Company.linkedin != undefined ? project.PrivateProject.Company.linkedin : null

    const article = ref<HTMLElement | null>(null)

    onMounted(() => {

        const element: HTMLElement | null = article.value

        if (element === null ) return

        useScrollAnimation(element)
    })

</script>

<template>
    <article ref="article" class="card w-full hover personal-card opacity-0">
        <div class="card-body">
            <a v-if="logo && linkedin" :href="linkedin" class="btn btn-primary fixed logo">
                <img :src="logo" alt="Company Logo" width="50"/>
            </a>
            <h1>{{ project.name }}</h1>
            <p>{{ projectDescription }}</p>
            <div class="card-actions justify-end">
                <a :href="url" class="button">See more</a>
            </div>
        </div>
    </article>
</template>

<style scoped>

    .logo {
        height: fit-content;
        padding-top: 6px;
        padding-bottom: 12px;
        left: 50%;
        top: -10%;
        transform: translateX(-50%) !important;
    }

    .logo:active {
        transform: translateY(-5px);
    }

</style>