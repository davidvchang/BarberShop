import userModels from '../models/users.model.js'

const userController = {}

userController.getUser = async (req, res) => {
    try {
        const user = await userModels.find()
        res.status(200).json(user)
    } catch (ex) {
        res.status(500).send({message: "An error occurred while getting users", error: ex.message})
    }
}

userController.postUser = async (req, res) => {
    const {name, lastname, phone_number, email, password} = req.body
    try {
        const newUser = new userModels({
            name: name, 
            lastname: lastname,
            phone_number: phone_number,
            email: email,
            password: password
        })

        await newUser.save();
        res.status(201).send("The user has been created correctly.")
    } catch (ex) {
        res.status(500).send({message: "An error occurred while registering", error: ex.message})
    }
}

export default userController