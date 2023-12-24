export default defineEventHandler(async event => {
  try {
    return await ProjectsSchema.find()
  } catch (error) {
    return error
  }
})
