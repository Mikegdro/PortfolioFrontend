<script setup lang="ts">

    import { ref } from 'vue';

    import { Swiper, SwiperSlide } from 'swiper/vue'

    import { Autoplay } from 'swiper/modules'

    import 'swiper/css'
    // import 'swiper/css/autoplay'

    import { useFetch } from '@vueuse/core';

    import type { Tecnologies } from '../../types';

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


<template v-if="tecnologies">
    <swiper class="swiper mt-6" :slides-per-view="3" :speed="5000" :spaceBetween="30" :loop="true" :modules="[Autoplay]" :autoplay="{ delay: 0, pauseOnMouseEnter: true, waitForTransition: true }">
        <template v-for="tecnology in tecnologies">
            <swiper-slide v-if="tecnology.logo" :lazy="true">
                <div class="h-20">
                    <img class="object-contain h-full fill-current" :src="tecnology.logo" :alt="tecnology.name + ' logo'" loading="lazy" />
                </div>
            </swiper-slide>
        </template>
    </swiper>
</template>

<style scoped>

    .swiper > * {
        transition-timing-function: linear;
    }

</style>