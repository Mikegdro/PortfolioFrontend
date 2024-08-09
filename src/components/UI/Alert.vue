
<script setup lang="ts">

    import { ref } from 'vue'

    const { message } = defineProps<{ message: string }>()

    const isVisible = ref(true)

    function handleClose() {
        isVisible.value = false
    }

</script>

<template>
    <div role="alert" class="alert alert-warning w-3/5 fixed bottom-16 mx-auto hide" :class="{ active: isVisible }">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>{{message}}</span>
        <span @click="handleClose()" class="btn">X</span>
    </div>
</template>

<style>

    .hide {
        display: none;
    }

    .active {
        opacity: 1;
        display: flex !important;
        transition: opacity 200ms;
    }

</style>