import type { ThemeDefinition } from "vuetify"
// no types for 'colors'
// @ts-ignore
import colors from "vuetify/lib/util/colors"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import mongoose from "mongoose"

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
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
  hooks: {
    close: () => {
      mongoose.disconnect()
    }
  },
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
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: { mdi }
      },
      theme: {
        defaultTheme: "purpleDarkTheme",
        themes: { purpleDarkTheme }
      }
    }
  }
})
