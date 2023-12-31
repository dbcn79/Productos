const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const TipoPantalla = conexion.define('tiposPantallas', {
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


module.exports = TipoPantalla;