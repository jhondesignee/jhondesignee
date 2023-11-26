import type { ThemeDefinition } from "vuetify"
// no types for 'colors'
// @ts-ignore
import colors from "vuetify/lib/util/colors"
import projects from "./assets/projects.json"
import { nodePolyfills } from "vite-plugin-node-polyfills"

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
const projectsList = projects
  .map(project => project.extends)
  .filter(extend => typeof extend === "string") as unknown as Array<string>

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
  extends: projectsList,
  devtools: { enabled: false },
  vite: {
    plugins: [
      nodePolyfills({
        include: ["path"],
        globals: {
          process: false
        }
      })
    ]
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "purpleDarkTheme",
        themes: { purpleDarkTheme }
      }
    }
  }
})
