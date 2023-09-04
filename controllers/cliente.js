const { response } = require('express');
const Cliente      = require('../models/cliente');

const buscaCliente = async(id, req, res = response) => {

    const cliente = await Cliente.findByPk( id );

    return cliente;

}

const crearCliente = async (req, res = response) => {

    const { nombre, apellidos, direccion, nif, cp, poblacion, provincia, movil, email, observaciones } = req.body;

    const newCliente = await Cliente.create({
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion,
        nif: nif,
        cp: cp,
        poblacion: poblacion,
        provincia: provincia,
        movil: movil,
        email: email,
        observaciones: observaciones
    });

    // Devuelvo el json con el nuevo cliente creado
    res.json(newCliente);

}

const dameClientes = async (req, res = response) => {

    const cliente = await Cliente.findAll();
    res.json( cliente );

}

const dameClientesPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const cliente = await buscaCliente(idParam, req, res);

    if ( !cliente ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( cliente );

}

const modificarCliente = async (req, res = response) => {

    const { idParam } = req.params;
    const { nombre, apellidos, direccion, nif, cp, poblacion, provincia, movil, email, observaciones } = req.body;

    const cliente = await buscaCliente(idParam, req, res);

    if ( !cliente ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    cliente.set({
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion,
        nif: nif,
        cp: cp,
        poblacion: poblacion,
        provincia: provincia,
        movil: movil,
        email: email,
        observaciones: observaciones
    });
    
    // Grabamos 
    await cliente.save();

    // Devuelvo el cliente modificado
    res.json( cliente );

}

module.exports = { 
    buscaCliente,
    crearCliente,
    dameClientes, 
    dameClientesPorId,
    modificarCliente }