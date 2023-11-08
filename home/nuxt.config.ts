import type { ThemeDefinition } from "vuetify"
// @ts-ignore
import colors from "vuetify/lib/util/colors"
import projects from "./assets/projects.json"

const purpleDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#334",
    surface: "#445",
    primary: colors.purple.base,
    secondary: colors.indigo.darken1,
    accent: colors.lightBlue.accent3
  }
}
const projectsList = projects.map(project => project.path)

export default defineNuxtConfig({
  $development: {
    app: {
      head: {
        script: [
          {
            src: "//cdn.jsdelivr.net/npm/eruda",
            onload: "eruda.init()"
          }
        ]
      }
    },
    typescript: { typeCheck: true }
  },
  modules: ["@invictus.codes/nuxt-vuetify"],
  devtools: { enabled: false },
  extends: [...projectsList],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "purpleDarkTheme",
        themes: { purpleDarkTheme }
      }
    }
  }
})
