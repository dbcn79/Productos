const { sequelize } = require('../database/connection');
const Categoria     = require('../models/categoria');
const Marca         = require('../models/marca');
const Producto      = require('../models/producto');
const Resolucion    = require('../models/resolucion');
const TipoPantalla  = require('../models/tipoPantalla');

// Foreign key con Categorias
Producto.belongsTo( Categoria, { foreignKey: 'categoriaId' } );
Producto.belongsTo( Marca, { foreignKey: 'marcaId' } );
Producto.belongsTo( Resolucion, { foreignKey: 'resolucionId' } );
Producto.belongsTo( TipoPantalla, { foreignKey: 'tipoPantallaId' } );

module.exports = {
    Categoria,
    Marca,
    Producto,
    Resolucion,
    TipoPantalla
}