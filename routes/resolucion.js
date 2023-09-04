const { Router } = require('express');
const { check }  = require('express-validator');
const { crearResolucion,
        dameResoluciones, 
        dameResolucionesPorId,
        inactivarResolucion,
        modificarResolucion } = require('../controllers/resolucion');
const { validarCampos,
        validarJWT } = require('../middlewares');

const router = Router();

// Obtenemos todas las resoluciones
router.get('/', dameResoluciones);  

// Obtenemos la resolucion pasada por parámetro
router.get('/:idParam', [
    validarCampos
], dameResolucionesPorId);  

// Crear resolucion. Se tiene en cuenta el token válido del cliente
 router.post('/', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], crearResolucion);

// Modificar la resolucion
router.put('/:idParam', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], modificarResolucion);  

// Resolucionmos la resolucion como no activa
router.delete('/:idParam', [
    //validarJWT,
    validarCampos
], inactivarResolucion);  

module.exports = router;