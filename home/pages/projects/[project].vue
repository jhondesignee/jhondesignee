<template>
  <component v-if="typeof projectComponent !== 'string'" :is="projectComponent"></component>
  <p v-else>ops</p>
</template>
<script lang="ts" setup>
  import { resolveDynamicComponent } from "vue"
  
  const route = useRoute()
  const projectName = route.params.project
  let projectComponent: ReturnType<typeof resolveDynamicComponent>
  
  if (typeof projectName === "string") {
    projectComponent = resolveDynamicComponent(projectName)
  }
</script>