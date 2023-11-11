<template>
  <v-card v-for="project in projects" class="rounded-lg mb-4">
    <v-avatar color="surface-variant" rounded="lg" class="ma-4" size="x-large"></v-avatar>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle>{{ project.description }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="accent" :to="'/projects/' + project.component">acessar</v-btn>
      <v-btn color="accent" @click="shareProject(project.component)">compartilhar</v-btn>
    </v-card-actions>
  </v-card>
  <v-snackbar v-model="snackbar.isOpen">{{ snackbar.text }}</v-snackbar>
</template>
<script lang="ts" setup>
  import projects from "assets/projects.json"
   
  const shareStatus = {
    success: "Compartilhado com sucesso",
    fail: "Falha ao compartilhar"
  }
  const snackbar = ref({
    isOpen: false,
    text: ""
  })
  
  async function shareProject(projectName: string): Promise<void> {
    if (process.client && navigator) {
      try {
        const url = new URL("/projects/" + projectName, location.href).href
        await navigator.share({ url })
        snackbar.value.text = shareStatus.success
      } catch (error) {
        snackbar.value.text = shareStatus.fail
      }
    } else {
      snackbar.value.text = shareStatus.fail
    }
    snackbar.value.isOpen = true
  } 
</script>