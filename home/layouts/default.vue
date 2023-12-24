<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title @click="$router.replace('/')">
        <v-avatar>
          <v-img
            aspect-ratio="1/1"
            src="https://raw.githubusercontent.com/jhondesignee/jhondesignee/main/transparent-logo.png"
          ></v-img>
        </v-avatar>
        Jhon Designee
      </v-app-bar-title>
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
            <v-list-item
              v-for="project in projects"
              :to="resolveProjectPath(project.path)"
              color="accent"
            >
              <v-list-item-title>{{ project.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
  import socials from "assets/socials.json"
  import projects from "assets/projects.json"

  useHead({
    templateParams: {
      separator: "¦",
      pageName: "Jhon Designee"
    },
    htmlAttrs: { lang: "pt-br" },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png"
      }
    ]
  })
  useSeoMeta({
    title: "Home %separator %pageName",
    ogTitle: "Home %separator %pageName",
    twitterTitle: "Home %separator %pageName",
    description: "things",
    ogDescription: "things",
    twitterDescription: "things",
    ogImage:
      "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png",
    twitterImage:
      "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png",
    twitterCard: "summary_large_image",
    ogUrl: "https://jhondesignee.netlify.app"
  })
</script>
