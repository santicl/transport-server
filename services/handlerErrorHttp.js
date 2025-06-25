const handlerErrorHttp = (res, message = 'Something error', code = 403) => {
    res.status(code);
    res.send({ message: message })
}

module.exports = { handlerErrorHttp };