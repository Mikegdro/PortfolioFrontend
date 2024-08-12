<script setup lang="ts">

    import { ref } from 'vue';

    import { vIntersectionObserver } from '@vueuse/components'
    import { useFetch } from '@vueuse/core';

    import type { Tecnologies } from '../../types';

    import Columns from '../UI/Columns.vue';
    import TecnologyCard from '../UI/TecnologyCard.vue';

    const isVisible = ref(false)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
    }

    const tecnologies = ref<Tecnologies[]>([])
    const err = ref(false)
    const loading = ref(true)

    async function loadData() {
        const { isFetching, error, data } = await useFetch(`${import.meta.env.PUBLIC_API}/api/tecnologies`).get().json()

        err.value = error.value
        loading.value = isFetching.value
        tecnologies.value = data.value
    }

    loadData()

</script>

<template>
    <section>
        <h1 class="text-3xl">Tecnologies</h1>
        <div v-if="tecnologies" v-intersection-observer="onIntersectionObserver">
            <Columns>
                <div v-for="tecnology in tecnologies" :key="tecnology.id" class="scroll-animation right-animation child-animation z-0" :class="{ show: isVisible }" >
                    <TecnologyCard v-bind="tecnology" />
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