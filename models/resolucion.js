const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const Resolucion = conexion.define('resoluciones', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion
	: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.BOOLEAN
    },
});


module.exports = Resolucion;