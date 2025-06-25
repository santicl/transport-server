const { validationResult } = require("express-validator")

const validatorResults = (req, res, next) => {
    try {
        console.log('validator', req.body)
        validationResult(req).throw();
        return next()
    } catch (err) {
        res.status(403);
        res.send({ errors: err.array() })
    }
}

module.exports = validatorResults;