import serviceModels from '../models/services.model.js'

const serviceController = {}

serviceController.getService = async (req, res) => {
    try {
        const service = await serviceModels.find()
        res.status(200).json(service)
    } catch (ex) {
        res.status(404).send("Ha ocurrido un error", ex)
        console.log(ex)
    }
}

serviceController.postService = async (req, res) => {
    const {name, price, description} = req.body;
    try {
        const newService = serviceController({
            name: name, 
            price: price,
            description, description
        })

        await newService.save()
        res.status(201).send("Se ha añadido correctamente el servicio")
    } catch (ex) {
        res.status(404).send("Ha ocurrido un error", ex)
        console.log(ex)
    }
}

export default serviceController