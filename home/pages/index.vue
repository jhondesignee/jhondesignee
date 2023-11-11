<template>
  <ProjectCard />
</template>
<script lang="ts" setup>
  useSeoMeta({
    title: "Home",
    ogTitle: "Home",
    twitterTitle: "Home",
    description: "things",
    ogDescription: "things",
    twitterDescription: "things",
    ogImage: "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png",
    twitterImage: "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png",
    twitterCard: "summary_large_image",
    ogUrl: "https://jhondesignee.netlify.app"
  })
  useHead({
    titleTemplate: "%s ¦ Jhon Designee",
    htmlAttrs: { lang: "pt-br" },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://raw.githubusercontent.com/jhondesignee/jhondesignee/61c714de4a34f418f880117c705a22c125b30cc2/logo.png"
      }
    ]
  })
</script>