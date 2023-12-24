import { Schema, model } from "mongoose"

const socialSchema = new Schema({
  title: String,
  icon: String,
  url: String
})

export default model("Socials", socialSchema)
