const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const Categoria = conexion.define('categorias', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo
	: {
        type: DataTypes.STRING
    },
    descripcion
	: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.BOOLEAN
    },
});


module.exports = Categoria;