import userModels from '../models/users.model.js'
import bcrypt from 'bcryptjs';

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
    const {name, lastname, phone_number, email, password, type_user} = req.body
    try {

        //ENCRYPT PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModels({
            name: name, 
            lastname: lastname,
            phone_number: phone_number,
            email: email,
            password: hashedPassword,
            type_user: type_user
        })

        await newUser.save();
        res.status(201).send("The user has been created correctly.")
    } catch (ex) {
        res.status(500).send({message: "An error occurred while registering", error: ex.message})
    }
}

userController.getLoginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await userModels.findOne({email});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Comparamos la contraseña ingresada con la contraseña encriptada
        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            res.status(200).json({ message: "Login successful", email: user.email });
        }
        else {
            res.status(400).json({ message: "Invalid password" });
        }
    } catch (ex) {
        res.status(500).send({message: "An error occurred while getting user", error: ex.message})
    }
}

export default userController