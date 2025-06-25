const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: [
            "admin",
            "user"
        ],
        default: "user"
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('users', userSchema);