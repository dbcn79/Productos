const { Router } = require('express');
const { check }  = require('express-validator');
const { crearTipoPantalla,
        dameTipoPantallas, 
        dameTipoPantallasPorId,
        inactivarTipoPantalla,
        modificarTipoPantalla } = require('../controllers/TipoPantalla');
const { validarCampos,
        validarJWT } = require('../middlewares');

const router = Router();

// Obtenemos todas las tipos de pantalla
router.get('/', dameTipoPantallas);  

// Obtenemos el tipo de pantalla pasada por parámetro
router.get('/:idParam', [
    validarCampos
], dameTipoPantallasPorId);  

// Crear tipo de pantalla. Se tiene en cuenta el token válido del cliente
 router.post('/', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], crearTipoPantalla);

// Modificar el tipo de pantalla
router.put('/:idParam', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], modificarTipoPantalla);  

// TipoPantallamos el tipo de pantalla como no activa
router.delete('/:idParam', [
    //validarJWT,
    validarCampos
], inactivarTipoPantalla);  

module.exports = router;