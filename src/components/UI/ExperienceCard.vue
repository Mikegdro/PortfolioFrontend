<script setup lang="ts">

    import { ref, onMounted } from 'vue'

    import { useScrollAnimation } from '../../composables/ScrollAnimation.ts'

    import { type Experience } from '../../types'

    import { getDayAndMonth } from '../../utils'

    const experience = defineProps<Experience>()

    const experienceUrl = `/experience/${experience.id}`

    const startDate: Array<string> = getDayAndMonth(experience.startDate!)
    const endDate: Array<string> = getDayAndMonth(experience.endDate!)

    const article = ref<HTMLElement | null>(null)

    onMounted(() => {

        const element: HTMLElement | null = article.value

        if (element === null ) return

        useScrollAnimation(element)
    })

</script>

<template>
    <article ref="article" class="flex justify-between flex-wrap gap-5 p-7 rounded-xl hover shadow-lg personal-card ScrollAnimation">
        <div class="flex flex-col">
            <h1>{{ experience.role }}</h1>
            <p>{{ startDate[0] }} {{ startDate[1] }} - {{ endDate[0] }} {{ endDate[1] }}</p>
        </div>
        <a class="button" :href="experienceUrl">
            See more
        </a>
    </article>
</template>