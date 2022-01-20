import React from 'react'

//toma dos props
const Mensaje = ({children, tipo}) => {
    return (
        //se lee children el tipo es lo que lee en la clase
        <div className={`alerta ${tipo}`}>{children}</div>
    )
}

export default Mensaje
