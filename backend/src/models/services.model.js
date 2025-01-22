import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
}, {
    //Guarda cuando se creó y actualizó el documento
    timestamps: true 
})

//Service es el nombre que se le dió al modelo
const Service = mongoose.model('Service', serviceSchema);

export default Service