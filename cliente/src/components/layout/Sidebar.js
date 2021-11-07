import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>WEB<span>Planta</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Plantas</h2>
                <ListadoProyectos />
                <br/>
                <button type="button" className="btn btn-block btn-primario">
                    <Link to={'/crear-cita'} >
                        Crear Cita
                    </Link>
                </button>
                <br/>
                <button type="button" className="btn  btn-block btn-primario">
                    <Link to={'/cotizar-planta'}>
                        Cotizar Planta
                    </Link>
                </button>
            </div>
        </aside>
     );
}
 
export default Sidebar;