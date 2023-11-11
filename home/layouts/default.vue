<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title @click="$router.replace('/')">Jhon Designee</v-app-bar-title>
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-list>
            <v-list-subheader>Socials</v-list-subheader>
            <v-list-item v-for="social in socials" :href="social.url" target="_blank">
              <template #prepend>
                <v-icon>{{ social.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ social.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list>
            <v-list-subheader>Projects</v-list-subheader>
            <v-list-item v-for="project in projects" :to="'/projects/' + project.component">
              <v-list-item-title>{{ project.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
  import socials from "assets/socials.json"
  import projects from "assets/projects.json"
</script>