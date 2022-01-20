//rutas para crear las citas
const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');
const { check } = require('express-validator');

//Crear una cita 
//api/cita
router.post('/',
    citaController.crearCita
);

//Obtener las citas por proyecto
router.get('/',
    citaController.obtenerCitas
);

module.exports = router;

