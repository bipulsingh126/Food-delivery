import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        requried: true
    },
    items: {
        type: Array,
        requried: true
    },
    amount: {
        type: Number,
        requried: true
    },
    address: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String, required: true },
    },
    status: {
        type: String,
        default: "Food Processing"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    payment: {
        type: Boolean,
        default: false
    }
})


const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)

export default orderModel;