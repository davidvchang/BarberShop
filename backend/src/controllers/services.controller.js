import serviceModels from '../models/services.model.js'

const serviceController = {}

serviceController.getService = async (req, res) => {
    try {
        const service = await serviceModels.find()
        res.status(200).json(service)
    } catch (ex) {
        res.status(500).send({message: "An error occurred while getting services", error: ex.message})
        console.log(ex)
    }
}

serviceController.postService = async (req, res) => {
    const {name, price, description} = req.body;
    try {
        const newService = new serviceModels({
            name: name, 
            price: price,
            description: description
        })

        await newService.save()
        res.status(201).send("The service has been created correctly.")
    } catch (ex) {
        res.status(500).send({message: "An error occurred while registering", error: ex.message})
        console.log(ex)
    }
}

serviceController.getOneService = async (req, res) => {
    try {
        const service = await serviceModels.findById(req.params.id)
        if (!service) {
            return res.status(404).json("Service not found")
        }

        res.status(200).json(service)
    } catch (ex) {
        res.status(500).send({message: "An error occurred while getting one service", error: ex.message})
        console.log(ex)
    }
}

serviceController.deleteService = async (req, res) => {
    try {
        const service = await serviceModels.findByIdAndDelete(req.params.id)
        if (!service) {
            return res.status(404).json("Service not found")
        }

        res.status(200).json("The service has been deleted correctly.")
    } catch (ex) {
        res.status(500).send({message: "An error occurred while delete one service", error: ex.message})
        console.log(ex)
    }
}

serviceController.updateService = async (req, res) => {
    const {name, price, description} = req.body;

    try {
        const service = await serviceModels.findByIdAndUpdate(req.params.id, {
            name,
            price,
            description
        })

        if (!service) {
            return res.status(404).json("Service not found")
        }
        
        res.status(200).json("The service has been updated correctly.")
    } catch (ex) {
        res.status(500).send({message: "An error occurred while updating one service", error: ex.message})
        console.log(ex)
    }
}

export default serviceController