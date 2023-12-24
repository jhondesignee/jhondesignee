<template>
  <ProjectCard
    v-for="project in projects"
    :title="project.title"
    :description="project.description"
    :path="project.path"
  />
</template>
<script lang="ts" setup>
  const projects = await fetchApi<IProjects>("projects")
</script>
