import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Planta: <span>{cita.planta}</span></p>
        <p>Usuario: <span>{cita.usuario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Inquietud: <span>{cita.inquietud}</span></p>

        <button className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id)}
        >Eliminar &times;
        </button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;