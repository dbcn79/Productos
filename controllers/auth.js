const { response } = require('express');
const Cliente = require('../models/cliente');
const { generaJWT } = require('../helpers/generar_jwt');

const login = async(req, res = response) => {

    const { clientId, clientSecret } = req.body;
    try
    {

        const cliente = await Cliente.findOne({
            where: { clientId: clientId,
                     clientSecret: clientSecret
                   },
              
        })
        
        if (!cliente) {
            return res.status(400).json({
                msg: 'El clientId / clientSecret proporcionado no es correcto'
            });
        }

        const token = await generaJWT( clientId, clientSecret );

        // Modifico el valor del token
        cliente.set({
            token: token
        });

        // Grabmo el cambio
        await cliente.save();

        // Devuelvo el token obtenido
        res.json({
            token
        })          
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = { login }