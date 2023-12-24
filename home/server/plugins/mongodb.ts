import type { Nitro } from "nitropack"
import mongoose from "mongoose"

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig()

  try {
    await mongoose.connect(config.mongodbUri)
    console.log("Connected to MongoDB")
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}
