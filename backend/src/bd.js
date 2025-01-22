import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.MONGODB_URI;

export const connectionMongo = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log(`Base de datos conectada`)
    } catch (ex) {
        console.log(`Ha ocurrido un error: ${ex}`)
    }
}

