const { sequelize } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Marca = sequelize.define('marcas', {
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