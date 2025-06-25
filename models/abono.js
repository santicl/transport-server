const mongoose = require('mongoose');
const { Schema } = mongoose;

const abonoSchema = new Schema({
    name: {
        type: String
    },
    abono: {
        type: Number
    },
    signature: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('abono', abonoSchema);