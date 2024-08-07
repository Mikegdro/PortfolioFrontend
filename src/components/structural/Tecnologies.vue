<script setup lang="ts">

    import type { Tecnologies } from '../../types';
    import { handleError } from '../../utils';

    import Columns from '../UI/Columns.vue';
    import TecnologyCard from '../UI/TecnologyCard.vue';

    import { ref } from 'vue';

    import { vIntersectionObserver } from '@vueuse/components'

    const isVisible = ref(false)

    function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
        isVisible.value = isIntersecting
        console.log(isIntersecting)
    }

    const loading = ref(false)
    const error = ref<string | null>(null)
    const tecnologies = ref<Tecnologies[]>([])

    fetchData()

    async function fetchData () {

        loading.value = true

        try {
            tecnologies.value = await fetch(`${import.meta.env.PUBLIC_API}/api/tecnologies`).then((r) => r.json())
            loading.value = false
        } catch (err) {
            error.value = handleError(err)
        }
    }

</script>

<template>
    <section>
        <div v-if="loading">
            <div class="flex w-52 flex-col gap-4">
                <div class="skeleton h-32 w-full"></div>
                <div class="skeleton h-4 w-28"></div>
                <div class="skeleton h-4 w-full"></div>
                <div class="skeleton h-4 w-full"></div>
            </div>
        </div>
        <div v-if="error"></div>
        <div v-if="tecnologies" v-intersection-observer="onIntersectionObserver">
            <h1 class="text-3xl">Tecnologies</h1>
            <Columns>
                <div v-for="tecnology in tecnologies" :key="tecnology.id" class="scroll-animation right-animation child-animation z-0" :class="{ show: isVisible }" >
                    <TecnologyCard v-bind="tecnology" />
                </div>
            </Columns>
        </div>
    </section>
    
</template>