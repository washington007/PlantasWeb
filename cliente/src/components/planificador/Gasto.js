import React from 'react'
import { formatearFecha } from '../helpers';

import IconoAlimenticia from '../../img/icono_alimenticia.svg'
import IconoMedicinal from '../../img/icono_medicinal.svg'
import IconoOrnamental from '../../img/icono_ornamental.svg'
import IconoCesped from '../../img/icono_cesped.svg'
import IconoBonsai from '../../img/icono_bonsai.svg'
import IconoCactus from '../../img/icono_cactus.svg'
import IconoArboles from '../../img/icono_arboles.svg'

const diccionarioIconos = {
    alimenticias: IconoAlimenticia,
    medicinal: IconoMedicinal,
    ornamental: IconoOrnamental,
    cesped: IconoCesped,
    bonsai: IconoBonsai,
    cactus: IconoCactus,
    arboles: IconoArboles
}

const Gasto = ({gasto}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto;

    return (
            <div className="gasto sombra">
            <div className="contenido-gasto">
                <img
                    src='{diccionarioIconos[categoria]}'
                    alt='Icono Gasto'
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">
                        Agregando el: {''}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>

            <p className="cantidad-gasto">${cantidad}</p>
        </div>
    )
}

export default Gasto
