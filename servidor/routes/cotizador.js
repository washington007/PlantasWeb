//rutas para crear el cotizador
const express = require('express');
const router = express.Router();
const cotizadorController = require('../controllers/cotizadorController');
const { check } = require('express-validator');

//Crear un cotizador 
//api/cotizador
router.post('/',
    cotizadorController.crearCotizador
);

//obtener el cotizador por proyecto
router.get('/',
    cotizadorController.obtenerCotizador
);

module.exports = router;

