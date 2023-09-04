const jwt = require('jsonwebtoken');

const Cliente = require('../models/cliente');

const validarJWT = async ( req = request, res = response, next ) => {

    const token = req.header('x-token');
    
    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

//    try {
//        const { uid } = jwt.verify( token, process.env.SECRETPRIVATEKEY );

//        const usuario = await Usuario.findByIdAndUpdate( uid, { estado : false} );

//        if ( !usuario) {
//            return res.status(401).json({
//                msg: 'Token no válido - Usuario no existe en BD'
//            })
//        }

        // Verificar si el uid tiene estado true
//        if ( !usuario.estado) {
//            return res.status(401).json({
//                msg: 'Token no válido - Usuario con estado inactivo'
//            })
//        } 
       
//        req.usuario = usuario;
//        next();

//    } catch (error) {
//        console.log(error);
//        res.status(401).json({
//            msg: 'Token no válido'
//        })
//    }

}

module.exports = {
    validarJWT
}