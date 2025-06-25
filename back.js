require('dotenv').config();
const express = require('express');
const { mongoDBConnect } = require('./config/db');
const path = require('path');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//app.use(express.static(path.join(__dirname, 'build')));


// LOG GET ROUTES AND ERRORS MIDDLE
//app.use(morgan('dev'));


// Configuración del puerto
const PORT = process.env.PORT || 4000;
app.set('port', PORT);

console.log(`🚀 Puerto configurado: ${PORT}`);

// Rutas de la API
app.use('/api', require('./routes'));

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ SERVER ON PORT ${PORT}`);
});

// CONNECT TO DB
mongoDBConnect();