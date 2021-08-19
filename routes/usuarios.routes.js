const { Router } = require('express');
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE } = require('../controllers/prube.controller');

const ROUTER = Router();

ROUTER.get('/', usuariosGET);

ROUTER.put('/:id', usuariosPUT);

ROUTER.post('/', usuariosPOST);

ROUTER.delete('/', usuariosDELETE);

module.exports = ROUTER;