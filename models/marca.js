const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const Marca = conexion.define('marcas', {
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

module.exports = Marca;