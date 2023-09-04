const { Router } = require('express');
const { check }  = require('express-validator');
const { crearCategoria,
        dameCategorias, 
        dameCategoriasPorId,
        inactivarCategoria,
        modificarCategoria } = require('../controllers/categoria');
const { validarCampos,
        validarJWT } = require('../middlewares');

const router = Router();

// Obtenemos todas las categorias
router.get('/', dameCategorias);  

// Obtenemos la categoria pasada por parámetro
router.get('/:idParam', [
    validarCampos
], dameCategoriasPorId);  

// Crear categoria. Se tiene en cuenta el token válido del cliente
 router.post('/', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], crearCategoria);

// Modificar la categoría
router.put('/:idParam', [
    //validarJWT,
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], modificarCategoria);  

// Marcamos la categoría como no activa
router.delete('/:idParam', [
    //validarJWT,
    validarCampos
], inactivarCategoria);  

module.exports = router;