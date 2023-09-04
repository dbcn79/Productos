const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('clientId', 'El clientId es obligatorio').not().isEmpty(),
    check('clientSecret', 'El clientSecret es obligatoria').not().isEmpty(),
    validarCampos
], login);  

module.exports = router;