import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },

    type_user: {
        type: String,
        require: true,
    }
}, {
    //Guarda cuando se creó y actualizó el documento
    timestamps: true 
})

const User = mongoose.model('User', userSchema);

export default User