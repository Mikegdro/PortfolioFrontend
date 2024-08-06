<script setup lang="ts">

    import { ref } from 'vue';
    import { vIntersectionObserver } from '@vueuse/components'

    const isVisible = ref(false)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    import type { Tecnologies } from '../../types';

    const data = defineProps<Tecnologies>()

</script>

<template>
    <article class="card shadow-xl hover personal-card scroll-animation right-animation child-animation z-0" :class="{ show: isVisible }" v-intersection-observer="onIntersectionObserver">
        <div class="card-body">
            <a class="btn btn-ghost dark:btn-outline outline-primary outline-dashed border-0 hover:bg-primary hover:outline-double min-h-20" :href="data.site!" target="_blank">
                <img :src="data.logo!" class="object-contain h-full"/>
            </a>
            <h1>{{ data.name }}</h1>
            <p>{{ data.description?.slice(0, 150) }}</p>
            <div class="card-actions justify-end items-center">
                <!-- <X link={{ data.twitter }} /> -->
            </div>
        </div>
    </article>
</template>