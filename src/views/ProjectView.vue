<script setup lang="ts">
    const router = useRoute()
    const data = router.params.id

</script>

<template>
    <div v-for="Links in LinksProjects" :key="Links.id">
        <div v-if="data == Links.id">
            {{ Links.name }}
        </div>
    </div>
</template>
