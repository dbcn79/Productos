const { Router } = require('express');
const { check }  = require('express-validator');
const { crearFactura } = require('../controllers/factura');
const { validarCampos } = require('../middlewares');

const router = Router();

// Crear factura
 router.post('/', [
    check('clienteId', 'El cliente es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
], crearFactura);

module.exports = router;