import { postAppUser, getAppUsers } from '../controllers/appUserControllers.js'
 import express from 'express'
const router = express.Router()

router.route('/')
.post(postAppUser)
.get(getAppUsers)

export default router
