const { Router } = require('express');
const { check }  = require('express-validator');
const { crearMarca,
        dameMarcas, 
        dameMarcasPorId,
        inactivarMarca,
        modificarMarca } = require('../controllers/marca');
const { validarCampos,
        validarJWT } = require('../middlewares');

const router = Router();

// Obtenemos todas las marcas
router.get('/', dameMarcas);  

// Obtenemos la marca pasada por parámetro
router.get('/:idParam', [
    validarCampos
], dameMarcasPorId);  

// Crear marca. Se tiene en cuenta el token válido del cliente
 router.post('/', [
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], crearMarca);

// Modificar la marca
router.put('/:idParam', [
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], modificarMarca);  

// Marcamos la marca como no activa
router.delete('/:idParam', [
    validarCampos
], inactivarMarca);  

module.exports = router;