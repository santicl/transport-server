const { matchedData } = require("express-validator");
const { assemblieModel } = require("../models");
const { handlerErrorHttp } = require("../services/handlerErrorHttp");


const getAssemblei = async (req, res) => {
    try {
        //console.log(req)
        const { body, user } = req;
        console.log(body)
        const data = await assemblieModel.findById({ _id: body.idAssemblei });
        res.send({ data, user })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_USER')
    }
}

const getAssembleis = async (req, res) => {
    try {
        const user = req.user;
        const data = await assemblieModel.find({});
        console.log(data)
        res.send({ data: data, status: true })
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ITEM_DETAILS')
    }
}

const getAssembleisNotToken = async (req, res) => {
  try {
    const { idAssemblei } = req.params; // ✅ Aquí está la clave

    const data = await assemblieModel.findById(idAssemblei);

    if (!data) {
      return res.status(404).json({ status: false, error: 'No encontrado' });
    }

    res.send({ data, status: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'ERROR_GET_ITEM_DETAILS', status: false });
  }
};



const createAssemblei = async (req, res) => {
    try {
        const { body } = req;
        const assemblei = await assemblieModel.findOne({ title: body.title });

        if (assemblei) {
            handlerErrorHttp(res, 'USER_ALREADY_EXIST', 406);
            return
        }

        const data = await assemblieModel.create(body);
        res.send({ data: data, message: 'OK' })

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_CREATE_ASSEMBLEI')
    }
}

const updateAssemblei = async (req, res) => {
    try {
        const { body } = req;
        const { item, newBusTotal, pubs, dataUpdateAbono, typeUpdate, idAssemblei, person } = body;
        console.log(person, dataUpdateAbono, idAssemblei);

        // Update Pubs
        if (typeUpdate === 'pubs') {
            const data = await assemblieModel.findOneAndUpdate(
                { _id: idAssemblei, "pubs.nameC": person },
                { $set: { "pubs.$.paid": dataUpdateAbono.abono } },
                { new: true }
            );
            res.send({ data, typeAbono: true });
            return
        }
        // Update busTotal
        if (typeUpdate === 'bus') {
            const data = await assemblieModel.findOneAndUpdate(
                { _id: item._id },
                { $set: { busTotal: newBusTotal } },
                { new: true }
            );
            console.log(data);
            res.send({ data, typeAbono: false });
            return
        }

        if (typeUpdate === 'add-pub') {
            const data = await assemblieModel.findOneAndUpdate(
                { _id: item._id },
                { $set: { pubs: pubs } },
                { new: true }
            );
            console.log(data);
            res.send({ data, typeAbono: false });
            return
        }

        if (typeUpdate === 'delete-pub') {
            const data = await assemblieModel.findOneAndUpdate(
                { _id: item._id },
                { $set: { pubs: pubs } },
                { new: true }
            );
            console.log(data);
            res.send({ data, typeAbono: false });
            return
        }

    } catch (err) {
        handlerErrorHttp(res, 'ERROR_UPDATE_PUB')
    }
}

const deleteAssemblei = async (req, res) => {
    try {
        const { body } = req;
        console.log(body)
        const data = await assemblieModel.deleteOne({ _id: body.id });
        res.send({ data })
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_GET_ITEM_DETAILS')
    }
}

module.exports = { getAssemblei, getAssembleisNotToken, getAssembleis, createAssemblei, updateAssemblei, deleteAssemblei };