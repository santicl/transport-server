const mongoose = require('mongoose');
const { Schema } = mongoose;

const assemblieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    personMoney: {
        type: Number,
        default: 0
    },
    personPay: {
        type: Number,
        default: 0
    },
    personNotPay: {
        type: Number,
        default: 0
    },
    bus: {
        type: Number,
        default: 0

    },
    busTotal: {
        type: Array,
        default: []
    },
    pubs: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
    },
    paid: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('assemblies', assemblieSchema);