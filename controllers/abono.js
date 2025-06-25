const { matchedData } = require("express-validator");
const { abonoModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");


const getAbono = async (req, res) => {
    try {
        console.log(req)
        const { body, user } = req;
        const data = await abonoModel.findById({ _id: body.idAssemblei});
        res.send({ data, user })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ABONO')
    }
}

const getAbonos = async (req, res) => {
    try {
        const user = req.user;
        const data = await abonoModel.find({});
        console.log(data)
        res.send({data: data, status: true})
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ABONO_DETAILS')
    }
}

const createAbono = async (req, res) => {
    try {
        const { body } = req;
        //const assemblei = await abonoModel.findOne({ person: body.person });
        
        //if (assemblei) {
            //handlerErrorHttp(res, 'USER_ALREADY_EXIST', 406);
            //return
        //}
        console.log(body, 'Abono')
        const data = await abonoModel.create(body);
        res.send({ data: data, message: 'OK' })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_CREATE_ABONO')
    }
}

const updateAbono = async (req, res) => {
    try {

        const { body } = req;
        const { idAssemblei, person, abono, status } = body;
        console.log(body);
        const data = await abonoModel.findOneAndUpdate({_id: idAssemblei});
        console.log(data);
        res.send({ data, updated: 'OK' })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_UPDATE_ABONO')
    }
}

const deleteAbono = async (req, res) => {
    try {
        const { body } = req;
        console.log(body)
        const data = await abonoModel.deleteOne({ _id: body.id });
        res.send({data})
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ABONO_DETAILS')
    }
}

module.exports = { getAbono, getAbonos, createAbono, updateAbono, deleteAbono };