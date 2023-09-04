const { sequelize } = require('../database/connection');
const { response } = require('express');
const Factura      = require('../models/factura');
const LinFactura   = require('../models/linFactura');
const Producto     = require('../models/producto'); 
const Contador     = require('../models/contador');

const buscarFactura = async(id, req, res = response) => {

    const factura = await Factura.findByPk( id );

    return factura;

}

const buscarProducto = async(id) => {

    const producto = await Producto.findByPk( id );

    return producto;

}

const dameAnyoContador = async() => {

    const contador = await Contador.findOne({
        where: {
            anyo: new Date().getFullYear()
        }
      });

      // Si no existe contador para ese año lo creamos
      if ( !contador ) {
        return await Contador.create({
                anyo: new Date().getFullYear()
            })               
      }
      return contador;

}

const crearFactura = async (req, res = response) => {

    const { clienteId, fecha, fechaEntrega, direccionFacturacion, lineas } = req.body;

    //#region 'Apartado Contadores'
    const contador = await dameAnyoContador();

    contador.set({
        factura: contador.factura + 1
    });

    await contador.save();

    //#endregion
    
    try {
        const newFactura = await Factura.create({
            clienteId: clienteId,
            fecha: fecha,
            numero: contador.anyo.toString() + zeroFill(contador.factura, 4),
            fechaEntrega: fechaEntrega,
            direccionFacturacion: direccionFacturacion
        })
        
        lineas.forEach(function(lineaActual) { 
            buscarProducto( lineaActual.productoId )
            .then(producto => {

                //#region 'Cálculos para importes unitarios, iva y totales'
                let baseImponible  = Number(producto.precio * lineaActual.cantidad).toFixed(2);
                if (lineaActual.dto > 0) {
                    var importe = Number(baseImponible - (baseImponible * lineaActual.dto) / 100).toFixed(2);
                } else {
                    var importe =  baseImponible;
                }
                let importeIva = Number(importe * lineaActual.iva / 100).toFixed(2);
                let total      = parseFloat(importe) + parseFloat(importeIva);
                //#endregion

                //#region 'Inserción de la linea de la factura'
                const newLinea = LinFactura.create({
                    facturaId: newFactura.id,
                    productoId: lineaActual.productoId,
                    descripcion: producto.descripcion,
                    cantidad: lineaActual.cantidad,
                    precioUnitario: producto.precio,
                    base: baseImponible,
                    dto: lineaActual.dto,
                    importe: importe,
                    iva: lineaActual.iva,
                    importeIva: importeIva,
                    total: total
                })
                //#endregion

            })
            .catch(error => {
                res.status(500).json(error);
            })
        })

        res.json( `Factura núm. ${newFactura.numero} generada correctamente` );        
    } catch (error) {
        res.status(500).json(error);
    }    

}

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}

module.exports = { 
    buscarFactura,
    buscarProducto,
    //dameContadorFactura,
    crearFactura
    }
