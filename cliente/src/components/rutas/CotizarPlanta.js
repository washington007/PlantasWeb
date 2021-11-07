import React from 'react';
import Header from '../Cotizador/Header';
import Formulario from '../Cotizador/Formulario';

import styled from '@emotion/styled';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFF;
    padding: 3rem;
`

function CotizarPlanta(){
    return(
        <Contenedor>
            <Header 
                titulo='Contizador de Plantas'
            />

            <ContenedorFormulario>
                <Formulario/>
            </ContenedorFormulario>
        </Contenedor>
    );
}

export default CotizarPlanta;