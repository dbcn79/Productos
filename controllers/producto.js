const { response } = require('express');
const Producto     = require('../models/producto');
const { Categoria, 
        Marca,
        Resolucion,
        TipoPantalla } = require('../database/index');

const buscaProducto = async(id, req, res = response) => {

    const producto = await Producto.findByPk( id, {
        attributes: { exclude: ['categoriaId', 'marcaId', 'resolucionId', 'tipoPantallaId'] },
        include: [Categoria, Marca, Resolucion, TipoPantalla],
        where: {
            activo: true
        }
    });
    
    return producto;
}

const dameProductos = async (req, res = response) => {

    const producto = await Producto.findAll({
        attributes: { exclude: ['categoriaId', 'marcaId', 'resolucionId', 'tipoPantallaId'] },
        include: [Categoria, Marca, Resolucion, TipoPantalla],
        where: {
            activo: true
        }
    });

    res.json( producto );
}

const dameProductosPorId = async (req, res = response) => {

    const { idParam } = req.params;

    const producto = await buscaProducto(idParam, req, res);

    if ( !producto ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    }    

    res.json( producto );
}

const crearProducto = async (req, res = response) => {

    const { codigo, descripcion, activo, categoria, marca, resolucione, tiposPantalla, precio,
            pulgadas, resolucionPixeles, formatoPantalla, tipoHertzios, diagonalPantalla, hertzios,
            hertziosNativos, smartTV, sistemaOperativo, tipoSintonizador, observaciones, agotado}  = req.body;

    // Comprobamos la existencia de la marca, si no se encuentra mostramos mensaje
    const marcaAux = await Marca.findByPk( marca.id );
    if ( !marcaAux ) {
		return res.status(400).json( {msg: `El producto ${marca.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        marcaAux.set({
            descripcion: marca.descripcion,
            activo: marca.activo
        });        
    }

    // Grabamos 
    await marcaAux.save();

    // Comprobamos la existencia de la categoria, si no se encuentra mostramos mensaje
    const categoriaAux = await Categoria.findByPk( categoria.id );
    if ( !categoriaAux ) {
		return res.status(400).json( {msg: `La categoría ${categoria.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        categoriaAux.set({
            descripcion: categoria.descripcion,
            activo: categoria.activo
        });        
    }

    // Grabamos 
    await categoriaAux.save();

    // Comprobamos la existencia de la resolucion, si no se encuentra mostramos mensaje
    const resolucionAux = await Resolucion.findByPk( resolucione.id );
    if ( !resolucionAux ) {
		return res.status(400).json( {msg: `La resolución ${resolucione.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        resolucionAux.set({
            descripcion: resolucione.descripcion,
            activo: resolucione.activo
        });        
    }

    // Grabamos 
    await resolucionAux.save();

    // Comprobamos la existencia del tipo de pantalla, si no se encuentra mostramos mensaje
    const tipoPantallaAux = await TipoPantalla.findByPk( tiposPantalla.id );
    if ( !tipoPantallaAux ) {
		return res.status(400).json( {msg: `El tpo de pantalla ${tiposPantalla.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        tipoPantallaAux.set({
            descripcion: tiposPantalla.descripcion,
            activo: tiposPantalla.activo
        });        
    }

    // Grabamos 
    await tipoPantallaAux.save();

    const newProducto = await Producto.create({
		codigo: codigo,
        descripcion: descripcion,
		activo: activo,
		marcaId: marca.id,
		categoriaId: categoria.id,
		tipoPantallaId: tiposPantalla.id,
		resolucionId: resolucione.id,
		precio: precio,
		pulgadas: pulgadas, 
		resolucionPixeles: resolucionPixeles,
		formatoPantalla: formatoPantalla,
		tipoHertzios: tipoHertzios,
		diagonalPantalla: diagonalPantalla,
		hertzios: hertzios,
		hertziosNativos: hertziosNativos,
		smartTV: smartTV,
		sistemaOperativo: sistemaOperativo,
		tipoSintonizador: tipoSintonizador,
		observaciones: observaciones,
		agotado: agotado
    });

    // Devuelvo el json con el nuevo producto creado
    res.json( newProducto) ;   
}

const inactivarProducto = async( req, res = response) => {

    const { idParam } = req.params;

    const producto = await buscaProducto(idParam, req, res);

    if ( !producto ) {
        return res.status(400).json( {msg: `El id ${idParam} no existe`} );
    };    

    // Modificamos los valores
    producto.set({
        activo: false
    });

    // Grabamos 
    await producto.save();

    // Devuelvo el producto inactivo
    res.json( producto );

}

const modificarProducto = async (req, res = response) => {

    const { idParam } = req.params;
    const { codigo, descripcion, activo, categoria, marca, resolucione, tiposPantalla, precio,
            pulgadas, resolucionPixeles, formatoPantalla, tipoHertzios, diagonalPantalla, hertzios,
            hertziosNativos, smartTV, sistemaOperativo, tipoSintonizador, observaciones, agotado}  = req.body;

    const producto = await buscaProducto(idParam, req, res);

    // Comprobamos la existencia de la marca, si no se encuentra mostramos mensaje
    const marcaAux = await Marca.findByPk( marca.id );
    if ( !marcaAux ) {
		return res.status(400).json( {msg: `El producto ${marca.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        marcaAux.set({
            descripcion: marca.descripcion,
            activo: marca.activo
        });        
    }

    // Grabamos 
    await marcaAux.save();

    // Comprobamos la existencia de la categoria, si no se encuentra mostramos mensaje
    const categoriaAux = await Categoria.findByPk( categoria.id );
    if ( !categoriaAux ) {
		return res.status(400).json( {msg: `La categoría ${categoria.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        categoriaAux.set({
            descripcion: categoria.descripcion,
            activo: categoria.activo
        });        
    }

    // Grabamos
    await categoriaAux.save();

    // Comprobamos la existencia de la resolucion, si no se encuentra mostramos mensaje
    const resolucionAux = await Resolucion.findByPk( resolucione.id );
    if ( !resolucionAux ) {
		return res.status(400).json( {msg: `La resolución ${resolucione.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        resolucionAux.set({
            descripcion: resolucione.descripcion,
            activo: resolucione.activo
        });        
    }

    // Grabamos
    await resolucionAux.save();

    // Comprobamos la existencia del tipo de pantalla, si no se encuentra mostramos mensaje
    const tipoPantallaAux = await TipoPantalla.findByPk( tiposPantalla.id );
    if ( !tipoPantallaAux ) {
		return res.status(400).json( {msg: `El tpo de pantalla ${tiposPantalla.descripcion} no existe. Debe de dar de alta previamente`} );
    } else {
        tipoPantallaAux.set({
            descripcion: tiposPantalla.descripcion,
            activo: tiposPantalla.activo
        });        
    }

    // Grabamos
    await tipoPantallaAux.save();

    producto.set({
		codigo: codigo,
        descripcion: descripcion,
		activo: activo,
		marcaId: marca.id,
		categoriaId: categoria.id,
		tipoPantallaId: tiposPantalla.id,
		resolucionId: resolucione.id,
		precio: precio,
		pulgadas: pulgadas, 
		resolucionPixeles: resolucionPixeles,
		formatoPantalla: formatoPantalla,
		tipoHertzios: tipoHertzios,
		diagonalPantalla: diagonalPantalla,
		hertzios: hertzios,
		hertziosNativos: hertziosNativos,
		smartTV: smartTV,
		sistemaOperativo: sistemaOperativo,
		tipoSintonizador: tipoSintonizador,
		observaciones: observaciones,
		agotado: agotado
    });


    // Devuelvo el json con el nuevo producto modificado
    res.json( producto);   
}

module.exports = {
    buscaProducto,
    dameProductos,
    dameProductosPorId,
    crearProducto,
    inactivarProducto,
    modificarProducto
}
