import { defineMongooseModel } from "#nuxt/mongoose"

export const ProjectsSchema = defineMongooseModel("Projects", {
  title: String,
  description: String,
  path: String
})
