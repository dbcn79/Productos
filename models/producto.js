const { sequelize } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Producto = sequelize.define('productos', {
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
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    marcaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    categoriaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    tipoPantallaId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    resolucionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    pulgadas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },    
    resolucionPixeles: {
        type: DataTypes.STRING,
    },   
    formatoPantalla: {
        type: DataTypes.STRING,
    },   
    tipoHertzios: {
        type: DataTypes.STRING,
    },    
    diagonalPantalla: {
        type: DataTypes.INTEGER,
    },    
    hertzios: {
        type: DataTypes.INTEGER,
    },    
    hertziosNativos: {
        type: DataTypes.INTEGER,
    },    
    smartTV: {
        type: DataTypes.BOOLEAN,
    },    
    sistemaOperativo: {
        type: DataTypes.STRING,
    },    
    tipoSintonizador: {
        type: DataTypes.STRING,
    },    
    observaciones: {
        type: DataTypes.TEXT,
    },    
    agotado: {
        type: DataTypes.BOOLEAN,
    },    
});

module.exports = Producto;