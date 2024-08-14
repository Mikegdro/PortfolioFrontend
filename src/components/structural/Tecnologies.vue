<script setup lang="ts">

    import { ref } from 'vue';

    import { useFetch } from '@vueuse/core';

    import type { Tecnologies } from '../../types';

    import Columns from '../UI/Columns.vue';
    import TecnologyCard from '../UI/TecnologyCard.vue';

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

    const activeTab = ref<"frontend" | "backend" | "devops">("frontend");

    function changeTab ( ev: MouseEvent ) {
        const target = ev.target as HTMLElement
        const id = target.getAttribute('id')

        if (id != null && id === 'frontend' || id === 'backend' || id === 'devops') {
            activeTab.value = id
        }
    }

</script>

<template>
    <section class="lg:px-52 md:px-24 sm:px-14 px-5 bg-base-300 py-16">
        <h1 class="text-5xl text-center">Tecnologies</h1>
        <div v-if="tecnologies" class="pt-10 flex flex-col gap-5">
            <div role="tablist" class="tabs tabs-boxed mt-5 bg-base-100">
                <a id="frontend" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'frontend' }" @click="changeTab">Front-end</a>
                <a id="backend" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'backend' }" @click="changeTab">Back-end</a>
                <a id="devops" role="tab" class="tab" :class="{ 'tab-active': activeTab === 'devops' }" @click="changeTab">Devops</a>
            </div>

            <div v-if="tecnologies" class="content bg-base-100 rounded-lg py-10 columns">
                <template v-for="(tecnology, index) in tecnologies" :key="tecnology.id" >
                    <TecnologyCard v-if="tecnology.type === activeTab" v-bind="tecnology" :data-index="index" />
                </template>
            </div>
            
        </div>
        <div v-if="loading">
            <div class="loading"></div>
        </div>
        <div v-if="err">
            Sorry we couldn't load the data
        </div>
    </section>
    
</template>