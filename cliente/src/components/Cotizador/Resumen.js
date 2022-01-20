import React from 'react'
import styled from '@emotion/styled';
import {primerMayuscula} from '../Cotizador/helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //extraer  de datos
    const{tipo, origen, year, insumos, extra} = datos;
    if(tipo === '' || origen === '' || year === '' || insumos === '' || extra === '')return null;
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Tipo: {primerMayuscula(tipo)}</li>
                <li>Origen: {primerMayuscula(origen)}</li>
                <li>Year: {primerMayuscula(year)}</li>
                <li>Insumos: {primerMayuscula(insumos)}</li>
                <li>Extra: {primerMayuscula(extra)}</li>
            </ul>
        </ContenedorResumen>

    );
}

export default Resumen;