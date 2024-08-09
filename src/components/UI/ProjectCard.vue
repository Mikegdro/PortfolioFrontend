<script setup lang="ts">

    import { type  Project } from '../../types';

    const project = defineProps<Project>()

    const url = "/project/" + project.id

    const projectDescription = project.PersonalProject
        ? project.PersonalProject.title
        : project.PrivateProject?.title;

</script>

<template>
    <article class="card w-full hover personal-card">
        <div class="card-body">
            <h1>{{ project.name }}</h1>
            <p>{{ projectDescription }}</p>
            <div class="card-actions justify-end">
                <a :href="url" class="button">See more</a>
            </div>
        </div>
    </article>
</template>