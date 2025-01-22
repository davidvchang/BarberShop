import app from './app.js'
import { connectionMongo } from './bd.js'

connectionMongo()

async function main () {
    await app.listen(app.get('port'))
    console.log(`Server on port: ${app.get('port')}`)
}

main()