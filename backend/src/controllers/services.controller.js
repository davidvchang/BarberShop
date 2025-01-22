import serviceModels from '../models/services.model.js'

const serviceController = {}

serviceController.getService = async () => {
    try {
        const service = await serviceModels.find()
        res.json(service)
    } catch (ex) {
        res.send("Ha ocurrido un error", ex)
        console.log(ex)
    }
}

export default serviceController