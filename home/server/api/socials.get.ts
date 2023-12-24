import Socials from "../models/socials.model"

export default defineEventHandler(async event => {
  return await Socials.find()
})
