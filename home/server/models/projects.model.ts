import { Schema, model } from "mongoose"

const projectSchema = new Schema({
  title: String,
  description: String,
  path: String
})

export default model("Projects", projectSchema)
