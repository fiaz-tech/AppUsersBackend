import mongoose from 'mongoose'

const appUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
)

const appUser = mongoose.model('appUser', appUserSchema)

export default appUser
