import React from 'react'

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

export default Cita;