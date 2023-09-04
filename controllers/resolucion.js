const { response } = require('express');
const Resolucion   = require('../models/resolucion');

const buscaResolucion = async(id, req, res = response) => {

    const resolucion = await Resolucion.findByPk( id );

    return resolucion;

}

const crearResolucion = async (req, res = response) => {

    const { descripcion } = req.body;

    const newResolucion = await Resolucion.create({
        descripcion: descripcion
    });

    // Devuelvo el json con la nueva resolución creada
    res.json(newResolucion);

}

const dameResoluciones = async (req, res = response) => {

    const resolucion = await Resolucion.findAll({
        where: {
            activo: true
        }
    });

    res.json( resolucion );

}

const dameResolucionesPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const resolucion = await buscaResolucion(idParam, req, res);

    if ( !resolucion ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( resolucion );

}

const inactivarResolucion = async (req, res = response) => {

    const { idParam } = req.params;

    const resolucion = await buscaResolucion(idParam, req, res);

    if ( !resolucion ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    resolucion.set({
        activo: false
    });

    // Grabamos
    await resolucion.save();

    // Devuelvo la resolución inactiva
    res.json( resolucion );

}

const modificarResolucion = async (req, res = response) => {

    const { idParam } = req.params;
    const { descripcion, activo } = req.body;

    const resolucion = await buscaResolucion(idParam, req, res);

    if ( !resolucion ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    resolucion.set({
        descripcion: descripcion,
        activo: activo
    });

    // Grabamos
    await resolucion.save();

    // Devuelvo la resolución modificada
    res.json( resolucion );

}

module.exports = { 
    buscaResolucion,
    crearResolucion,
    dameResoluciones, 
    dameResolucionesPorId,
    inactivarResolucion,
    modificarResolucion }