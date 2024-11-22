import express from 'express'
import morgan from "morgan";

import clientsRoutes from './routes/clients.routes.js'


const app = express();

//SETTINGS
app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(express.json())

app.use('/api/clientes', clientsRoutes);
app.use('/api/citas', clientsRoutes);

export default app