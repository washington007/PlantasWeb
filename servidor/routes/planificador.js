//rutas para crear el cotizador
const express = require('express');
const router = express.Router();
const planificadorController = require('../controllers/planificadorController');
const { check } = require('express-validator');

//Crear un planificador 
//api/planificador
router.post('/',
    planificadorController.crearPlanificador
);

//Obtener el planificador por proyecto
router.get('/',
planificadorController.obtenerPlanificador
);

module.exports = router;
