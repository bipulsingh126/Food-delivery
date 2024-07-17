import mongoose from 'mongoose';



const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    cartDate: {
        type : Object,
        default: {}
    }
}, {minimize: false})

 export const userModel = mongoose.model.user || mongoose.model("user" ,userSchema)
