import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
const app = express();

import appUserRoutes from './routes/appUserRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();

connectDB()

app.use(express.json())

app.use('/api/appUsers', appUserRoutes)



app.use(notFound)
app.use(errorHandler)
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
app.listen(3000, console.log(
  `Server running in ${process.env.NODE_ENV} mode from PORT ${PORT}`
  ))