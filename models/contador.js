const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const Contador = conexion.define('contadores', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    factura
	: {
        type: DataTypes.INTEGER
    },
    abono
	: {
        type: DataTypes.INTEGER
    },
    anyo: {
        type: DataTypes.INTEGER
    },
});


module.exports = Contador;