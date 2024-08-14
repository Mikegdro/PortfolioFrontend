<script setup lang="ts">

    import { ref, onMounted, watch } from 'vue'
    
    const target = ref<HTMLElement[]>([])
    const isVisible = ref(false)
    const root = ref(null)

    onMounted(() => {
        
    })

    function onEnter (el: any) {
        
    }

    function onLeave (el: any) {
    }

</script>

<template>
    <slot /> 
</template>