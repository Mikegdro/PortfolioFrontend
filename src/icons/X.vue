<script setup lang="ts">

    const { link } = defineProps<{ link: string }>()

</script>

<template>
    <a href={link} target="_blank" class="btn btn-primary w-1/2 ml-auto mt-5">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            viewBox="0 0 512 509.64"
            class="fill-transparent"
            width="40px"
            height="40px"
            ><rect width="512" height="509.64" rx="115.61" ry="115.61"></rect><path
                fill="#fff"
                fill-rule="nonzero"
                d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
            ></path></svg
        >
    </a>
</template>

