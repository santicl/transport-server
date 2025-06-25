const mongoose = require('mongoose');
const { DB_URLS } = require('./key');


const mongoDBConnect = () => {
    const DB_URI = DB_URLS.DB_URI;
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if (!err) {
                console.log('GOOD_CONEXION');
            } else {
                console.log('BAD_CONEXION');
            }
        }
    )
}

module.exports = { mongoDBConnect };