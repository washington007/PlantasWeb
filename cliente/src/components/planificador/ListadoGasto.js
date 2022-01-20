import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
        gastos,
        setGastoEditar,
        filtro,
        gastosFiltrados
    }) => {
    return (
        <div className="listado-gastos contenedor">
            { filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map( gasto => (
                        //lo que hace el map es que recorra todo el gasto
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}

                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos
