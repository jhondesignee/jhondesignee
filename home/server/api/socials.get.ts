export default defineEventHandler(async event => {
  try {
    return await SocialsSchema.find()
  } catch (error) {
    return error
  }
})
