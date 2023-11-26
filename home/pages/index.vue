<template>
  <ProjectCard
    v-for="project in projects"
    :title="project.title"
    :description="project.description"
    :path="project.path"
  />
</template>
<script lang="ts" setup>
  import projects from "assets/projects.json"

  
</script>
