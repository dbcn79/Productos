const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const LinFactura = conexion.define('linFacturas', {
   id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    facturaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productoId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    precioUnitario: {
        type: DataTypes.FLOAT
    },
    base: {
        type: DataTypes.FLOAT
    },
    dto: {
        type: DataTypes.FLOAT
    },
    importe: {
        type: DataTypes.FLOAT
    },
    iva: {
        type: DataTypes.FLOAT
    },
    importeIva: {
        type: DataTypes.FLOAT
    },
    total: {
        type: DataTypes.FLOAT
    },
});

module.exports = LinFactura;