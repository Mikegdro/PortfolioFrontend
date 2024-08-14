<script setup lang="ts">

    import type { Tecnologies } from '../../types';

    import X from '../../icons/X.vue'

    const data = defineProps<Tecnologies>()

</script>

<template>
    
    <article class="card shadow-xl hover personal-card ScrollAnimation">
        <div class="card-body">
            <a class="btn btn-ghost dark:btn-outline outline-primary outline-dashed border-0 hover:bg-primary min-h-20" :href="data.site!" target="_blank">
                <img :src="data.logo!" class="object-contain h-full" loading="lazy"/>
            </a>
            <X :link="data.twitter!" />
        </div>
    </article>

</template>