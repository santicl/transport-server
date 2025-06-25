const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

const removeEx = (filename) => {
    return filename.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter(file => {
    const name = removeEx(file);
    if (name !== 'index') {
        console.log(`${file}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})


module.exports = router