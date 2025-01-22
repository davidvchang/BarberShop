import express from 'express'
import morgan from 'morgan'

import serviceRouter from './routes/services.routes.js'

const app = express()

app.set("port", process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/services", serviceRouter)

export default app