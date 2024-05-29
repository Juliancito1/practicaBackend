const express = require('express');
const{
    crearProducto,
    listaProductos,
    crearVenta,
    listaVentas,
} = require('../controllers/adminController');

const routerAdmin = express.Router();

routerAdmin.post('/crearProducto',crearProducto);
routerAdmin.get('/productos', listaProductos);
routerAdmin.post('/crearVenta',crearVenta);
routerAdmin.get('/ventas',listaVentas);

module.exports = routerAdmin;