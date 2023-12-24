import Projects from "../models/projects.model"

export default defineEventHandler(async event => {
  return await Projects.find()
})
