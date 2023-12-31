const { response } = require('express');
const Categoria    = require('../models/categoria');

const buscaCategoria = async(id, req, res = response) => {

    const categoria = await Categoria.findByPk( id );

    return categoria;

}

const crearCategoria = async (req, res = response) => {

    const { body } = req;

    const newCategoria = await Categoria.create( body );

    // Devuelvo el json con la nueva categoría creada
    res.json(newCategoria);

}

const dameCategorias = async (req, res = response) => {

    const categoria = await Categoria.findAll({
        where: {
            activo: true
        }
    });

    res.json( categoria );

}

const dameCategoriasPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const categoria = await buscaCategoria(idParam, req, res);

    if ( !categoria ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( categoria );

}

const inactivarCategoria = async (req, res = response) => {

    const { idParam } = req.params;

    const categoria = await buscaCategoria(idParam, req, res);

    if ( !categoria ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    categoria.set({
        activo: false
    });
    
    // Grabamos 
    await categoria.save();

    // Devuelvo la categoría inactiva
    res.json( categoria );

}

const modificarCategoria = async (req, res = response) => {

    const { idParam } = req.params;
    const { body } = req;

    const categoria = await buscaCategoria(idParam, req, res);

    if ( !categoria ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    categoria.set( body );

    // Grabamos 
    await categoria.save();

    // Devuelvo la categoría modificada
    res.json( categoria );

}

module.exports = { 
    buscaCategoria,
    crearCategoria,
    dameCategorias, 
    dameCategoriasPorId,
    inactivarCategoria,
    modificarCategoria }
