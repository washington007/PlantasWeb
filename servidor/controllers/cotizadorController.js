const Cotizador = require('../models/Cotizador');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

//Crea una nuevo cotizador
exports.crearCotizador = async (req, res) => {

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

        // Creamos la cotizacion
        const cotizador = new Cotizador(req.body);
        await cotizador.save();
        res.json({ cotizador });
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

// Obtiene el cotizador por proyecto
exports.obtenerCotizador = async (req, res) => {

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

            // Obtener el cotizador por proyecto
            const cotizador = await Cotizador.find({ proyecto }).sort({ creado: -1 });
            res.json({ cotizador });

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}


