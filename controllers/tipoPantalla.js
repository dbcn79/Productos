const { response } = require('express');
const TipoPantalla = require('../models/tipoPantalla');

const buscaTipoPantalla = async(id, req, res = response) => {

    const tipoPantalla = await TipoPantalla.findByPk( id );

    return tipoPantalla;

}

const crearTipoPantalla = async (req, res = response) => {

    const { descripcion } = req.body;

    console.log(req.body);
    const newtipoPantalla = await TipoPantalla.create({
        descripcion: descripcion
    });

    // Devuelvo el json con el nuevo tipo de pantalla creado
    res.json(newtipoPantalla);

}

const dameTipoPantallas = async (req, res = response) => {

    const tipoPantalla = await TipoPantalla.findAll({
        where: {
            activo: true
        }
    });

    res.json( tipoPantalla );

}

const dameTipoPantallasPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const tipoPantalla = await buscaTipoPantalla(idParam, req, res);

    if ( !tipoPantalla ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( tipoPantalla );

}

const inactivarTipoPantalla = async (req, res = response) => {

    const { idParam } = req.params;

    const tipoPantalla = await buscaTipoPantalla(idParam, req, res);

    if ( !tipoPantalla ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    tipoPantalla.set({
        activo: false
    });

    // Grabamos
    await tipoPantalla.save();

    // Devuelvo el tipo de pantalla inactivo
    res.json( tipoPantalla );

}

const modificarTipoPantalla = async (req, res = response) => {

    const { idParam } = req.params;
    const { descripcion, activo } = req.body;

    const tipoPantalla = await buscaTipoPantalla(idParam, req, res);

    if ( !tipoPantalla ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    tipoPantalla.set({
        descripcion: descripcion,
        activo: activo
    });

    // Grabamos
    await tipoPantalla.save();

    // Devuelvo el tipo de pantalla modificado
    res.json( tipoPantalla );

}

module.exports = { 
    buscaTipoPantalla,
    crearTipoPantalla,
    dameTipoPantallas, 
    dameTipoPantallasPorId,
    inactivarTipoPantalla,
    modificarTipoPantalla }