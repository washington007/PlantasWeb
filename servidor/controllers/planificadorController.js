const Planificador = require('../models/Planificador');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');

//Crea un nuevo planificador
exports.crearPlanificador = async (req, res) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {

        // Extraer el usuario y comprobar si existe
        const { usuario } = req.body;

        const existeUsuario = await Usuario.findById(usuario);
        if(!existeUsuario) {
            return res.status(404).json({msg: 'Usuario no encontrado'})
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado
        /*if(existeProyecto.creador.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No Autorizado'});
        }*/

        // Creamos el planificador
        const planificador = new Planificador(req.body);
        await planificador.save();
        res.json({ planificador });
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

// Obtiene el planificador por usuario
exports.obtenerPlanificador = async (req, res) => {

        try {
            // Extraer el usuario y comprobar si existe
            const { usuario } = req.query;


            const existeUsuario = await Usuario.findById(usuario);
            if(!existeUsuario) {
                return res.status(404).json({msg: 'Usuario no encontrado'})
            }

            // Revisar si el Usuario actual pertenece al usuario autenticado
            if(existeUsuario.creador.toString() !== req.usuario.id ) {
                return res.status(401).json({msg: 'No Autorizado'});
            }

            // Obtener el planificador por usuario
            const planificador = await Planificador.find({ usuario }).sort({ creado: -1 });
            res.json({ planificador });

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}

