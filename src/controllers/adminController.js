const Productos = require('../models/producto-model')
const ProductosVendidos = require('../models/venta-model')

const crearProducto = async (req,res) => {
    try {
        const nuevoProducto = new Productos(req.body);

        await nuevoProducto.save();

        res.status(201).json({
            msg:'producto creado',
        })
    } catch (error) {
        res.status(500).json({
            msg: 'error',
        })
    }
}
const listaProductos = async (req,res) => {
    try {
        const listaProductos = await Productos.find();

        res.status(200).json({
            lista: listaProductos,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Por favor contactarse con un administrador',
        })
    }
}
const crearVenta = async (req,res) => {
    try {
        const producto = await Productos.findById(req.body.producto);

        if(!producto){
            res.status(400).json({
                msg: 'error',
            })
        }

        req.body.productoNombre = producto.name;

        const nuevaVenta= new ProductosVendidos(req.body);

        console.log(nuevaVenta);

        await nuevaVenta.save();

        res.status(201).json({
            msg: 'venta creada',
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'error',
        })
    }
}

const listaVentas = async (req,res) => {
    try {
        const listaVentas = await ProductosVendidos.find();
        console.log(listaVentas)
       
        res.status(200).json({
            lista: listaVentas,
        });
        
    } catch (error) {
        res.status(500).json({
            msg:'Por favor contactarse con un administrador',
        })
    }
}

module.exports = {crearProducto, listaProductos, crearVenta, listaVentas}