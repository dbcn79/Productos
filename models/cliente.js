const { conexion }  = require('../database/connection');
const { DataTypes } = require('sequelize');

const Cliente = conexion.define('clientes', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    nif: {
        type: DataTypes.STRING
    },
    cp: {
        type: DataTypes.STRING
    },
    poblacion: {
        type: DataTypes.STRING
    },
    provincia: {
        type: DataTypes.STRING
    },
    movil: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
});


module.exports = Cliente;
