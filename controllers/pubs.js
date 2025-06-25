const { matchedData } = require("express-validator");
const { pubsModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");


const getPub = async (req, res) => {
    try {
        const user = req.user;
        const data = await pubsModel.find({});
        res.send({ data, user })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_PUB')
    }
}

const getPubs = async (req, res) => {
    try {
        //const { id } = req.user;
        const data = await pubsModel.find({});
        console.log(data);
        res.send({ data: data, status: 'OK' });
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_PUBS')
    }
}

const createPub = async (req, res) => {
    try {
        const { body } = req;
        console.log(body);
        const data = await pubsModel.create(body);
        res.send({ data: data })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_CREATE_PUB')
    }
}

const updatePub = async (req, res) => {
    try {

        const { id, ...body } = matchedData(req);
        const data = await pubsModel.findByIdAndUpdate(id, body);
        res.send({ data })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_UPDATE_PUB')
    }
}

const deletePub = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await pubsModel.deleteOne({ _id: id });
        res.send({data})
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_PUB_DETAILS')
    }
}

module.exports = { getPub, getPubs, createPub, updatePub, deletePub };