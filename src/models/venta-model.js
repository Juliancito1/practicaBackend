const {Schema , model} = require('mongoose');

const ProductosVendidosSchema = Schema({
    nombreComprador:{
        type: String,
        required: true,
    },
    vendedor:{
        type: String,
        required: true,
    },
    productoNombre:{
        type: String,
        required: true,
    },
    producto:{
        type: Schema.Types.ObjectId,
        ref: 'Productos',
        required: true,
    },
    fechaVenta: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('ProductosVendidos', ProductosVendidosSchema)