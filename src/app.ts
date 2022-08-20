import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

const app = express()

// Logs
app.use(morgan('dev'))

// Cors
app.use(cors())

export default app
