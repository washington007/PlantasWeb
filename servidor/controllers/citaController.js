const Cita = require('../models/Cita');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

//Crea una nueva cita 
exports.crearCita = async (req, res) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {

        // Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto) {
            return res.status(404).json({msg: 'Proyecto no encontrado'})
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado
        /*if(existeProyecto.creador.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }*/

        // Creamos la cita
        const cita = new Cita(req.body);
        await cita.save();
        res.json({ cita });
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

// Obtiene las citas por proyecto
exports.obtenerCitas = async (req, res) => {

        try {
            // Extraer el proyecto y comprobar si existe
            const { proyecto } = req.query;


            const existeProyecto = await Proyecto.findById(proyecto);
            if(!existeProyecto) {
                return res.status(404).json({msg: 'Proyecto no encontrado'})
            }

            // Revisar si el proyecto actual pertenece al usuario autenticado
            if(existeProyecto.creador.toString() !== req.usuario.id ) {
                return res.status(401).json({msg: 'No Autorizado'});
            }

            // Obtener las citas por proyecto
            const citas = await Cita.find({ proyecto }).sort({ creado: -1 });
            res.json({ citas });

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}

