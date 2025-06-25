const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");


const getUser = async (req, res) => {
    try {
        const user = req.user;
        const data = await userModel.find({});
        res.send({ data, user, message: 'OK' })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_USERS')
    }
}

const getUsers = async (req, res) => {
    try {
        const { id } = req.user;
        const data = await userModel.findById(id);

        res.send({data: data, status: 'OK'})
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ITEM_DETAILS')
    }
}

const createUser = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await userModel.create(body);
        res.send({ data: data })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_CREATE_USER')
    }
}

const updateUser = async (req, res) => {
    try {

        const { id, ...body } = matchedData(req);
        const data = await userModel.findByIdAndUpdate(id, body);
        res.send({ data })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_UPDATE_USER')
    }
}

const deleteUser = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await userModel.deleteOne({ _id: id });
        res.send({data})
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ITEM_DETAILS')
    }
}

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };