const { Router } = require('express');
const { check }  = require('express-validator');
const { crearCliente,
        dameClientes, 
        dameClientesPorId,
        modificarCliente } = require('../controllers/cliente');
const { validarCampos } = require('../middlewares');

const router = Router();

// Obtenemos todos los clientes
router.get('/', dameClientes);  

// Obtenemos el cliente pasado por parámetro
router.get('/:idParam', [
    validarCampos
], dameClientesPorId);  

// Crear cliente
 router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('movil', 'El móvil es obligatorio').not().isEmpty(),
    validarCampos
], crearCliente);

// Modificar el cliente
router.put('/:idParam', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('movil', 'El móvil es obligatorio').not().isEmpty(),
    validarCampos
], modificarCliente);  

module.exports = router;