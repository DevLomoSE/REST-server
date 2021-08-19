const { request:req, response:res } = require('express');

const usuariosGET = (request = req, response = res) => {
    const { appid, nombre } = request.query;

    response.status(200).json({
        msg:'get CONTROLLER',
        nombre,
        appid
    });
}

const usuariosPUT = (request = req, response = res) => {
    const { id } = request.params;
    
    response.status(200).json({
        msg:'put CONTROLLER',
        id
    });
}

const usuariosPOST = (request = req, response = res) => {
    const { nombre, id } = request.body;

    response.status(300).json({
        msg:'post CONTROLLER',
        nombre,
        id
    });
}

const usuariosDELETE = (request = req, response = res) => {
    response.status(200).json({
        msg:'delete CONTROLLER'
    });
}

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE,
}