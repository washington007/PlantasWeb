import React from 'react'
import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label>Comparativa de Gastos</label>
                    <select
                         value={filtro}
                         onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">-- Todas las categorias --</option>
                        <option value="fechasa">Fechas</option>
                        <option value="alimenticias">Alimenticias</option>
                        <option value=" medicinal">Medicinal</option>
                        <option value="ornamental">Ornamental</option>
                        <option value="cesped">Cesped</option>
                        <option value="bonsai">Bonsai</option>
                        <option value="cactus">Cactus</option>
                        <option value="arboles">Arboles</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
