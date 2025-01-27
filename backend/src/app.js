import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import serviceRouter from './routes/services.routes.js'
import userRouter from './routes/users.routes.js'

const app = express()

app.set("port", process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/services", serviceRouter)
app.use("/api/users", userRouter)

export default app