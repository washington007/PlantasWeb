import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    //para que ingrese un valor en el presupuesto de tal manera que valida
    const handlePresupuesto = (e) => {
        e.preventDefault();

        //Mensaje de alerta al ingresar el presupuesto
        if(!presupuesto || presupuesto < 0) {
            //toma aqui lo que es el children del componente mensaje que se creo
            setMensaje('No es un presupuesto válido')
            return
        }
        //ojo aqui se coloca vacio para que no salga el setMensaje en el state de la consola
        setMensaje('')
        setIsValidPresupuesto(true)

    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">

            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input 
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
