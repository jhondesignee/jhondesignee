import { defineMongooseModel } from "#nuxt/mongoose"

export const SocialsSchema = defineMongooseModel("Socials", {
  title: String,
  icon: String,
  url: String
})
