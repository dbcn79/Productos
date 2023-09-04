const { sequelize } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Factura = sequelize.define('facturas', {
   id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    clienteId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE
    },
    numero: {
        type: DataTypes.STRING
    },
    abono: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    fechaEntrega: {
        type: DataTypes.DATE,
    },
    direccionFacturacion: {
        type: DataTypes.STRING,
    },
});

module.exports = Factura;