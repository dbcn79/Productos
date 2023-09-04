const { Router } = require('express');
const { check }  = require('express-validator');
const { crearProducto,
        dameProductos, 
        dameProductosPorId,
        inactivarProducto,
        modificarProducto } = require('../controllers/producto');
const { validarCampos,
        validarJWT } = require('../middlewares');

const router = Router();

// Obtenemos todas los productos
router.get('/', dameProductos);  

// Obtenemos el producto pasado por parámetro
router.get('/:idParam', [
    validarCampos
], dameProductosPorId);  

// Crear producto
router.post('/', [
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos
], crearProducto);

// Modificar producto
router.put('/:idParam', [
    validarCampos
], modificarProducto);

// Inactivar producto
router.delete('/:idParam', [
    validarCampos
], inactivarProducto);

module.exports = router;