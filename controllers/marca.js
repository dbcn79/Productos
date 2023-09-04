const { response } = require('express');
const Marca        = require('../models/marca');

const buscaMarca = async(id, req, res = response) => {

    const marca = await Marca.findByPk( id );

    return marca;

}

const crearMarca = async (req, res = response) => {

    const { descripcion } = req.body;

    const newMarca = await Marca.create({
        descripcion: descripcion
    });

    // Devuelvo el json con la nueva marca creada
    res.json(newMarca);

}

const dameMarcas = async (req, res = response) => {

    const marca = await Marca.findAll({
        where: {
            activo: true
        }
    });

    res.json( marca );

}

const dameMarcasPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const marca = await buscaMarca(idParam, req, res);

    if ( !marca ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( marca );

}

const inactivarMarca = async (req, res = response) => {

    const { idParam } = req.params;

    const marca = await buscaMarca(idParam, req, res);

    if ( !marca ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    marca.set({
        activo: false
    });

    // Grabamos 
    await marca.save();

    // Devuelvo la marca inactiva
    res.json( marca );

}

const modificarMarca = async (req, res = response) => {

    const { idParam } = req.params;
    const { descripcion, activo } = req.body;

    const marca = await buscaMarca(idParam, req, res);

    if ( !marca ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    marca.set({
        descripcion: descripcion,
        activo: activo
    });

    // Grabamos 
    await marca.save();

    // Devuelvo la marca modificada
    res.json( marca );

}

module.exports = { 
    buscaMarca,
    crearMarca,
    dameMarcas, 
    dameMarcasPorId,
    inactivarMarca,
    modificarMarca }