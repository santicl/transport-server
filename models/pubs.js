const mongoose = require('mongoose');
const { Schema } = mongoose;

const pubsSchema = new Schema({
    nameC: {
        type: String
    },
    cel: {
        type: Number
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('pubs', pubsSchema);