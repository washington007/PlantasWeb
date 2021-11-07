import React, { Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear state de Cita
    const [cita, actualizarCita] = useState({
        planta: '',
        usuario: '',
        fecha: '',
        hora: '',
        inquietud: ''
    });
    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const{planta, usuario, fecha, hora, inquietud} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        //Validar
        if(planta.trim() === '' || usuario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || inquietud.trim() === '' ){
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo
        actualizarError(false);

        //Asignar un Id
        cita.id = uuidv4();

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            planta: '',
            usuario: '',
            fecha: '',
            hora: '',
            inquietud: ''
        })
    }

    return (
        <Fragment>
            <h2>Cita</h2>
            {error ? <p className="alerta-errores">Todos los campos son obligatorios</p> 
            : null}
            
            <form onSubmit={submitCita}>

                <label>Nombre de la Planta</label>
                <input
                    type="text"
                    name="planta"
                    className="u-full-width"
                    placeholder="Aqui es un combo box"
                    onChange={actualizarState}
                    value={planta}
                />
                
                <label>Nombre del Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    className="u-full-width"
                    placeholder="Nombre del Usuario"
                    onChange={actualizarState}
                    value={usuario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Inquietud</label>
                <textarea
                    className="u-full-width"
                    name="inquietud"
                    onChange={actualizarState}
                    value={inquietud}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Crear Cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;