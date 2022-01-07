import React, {useState} from 'react';
import Header from '../Cotizador/Header';
import Formulario from '../Cotizador/Formulario';
import Resumen from '../Cotizador/Resumen';
import Resultado from '../Cotizador/Resultado';
import Spinner from '../Cotizador/Spinner';

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
    const [resumen, guardarResumen] = useState({
        cotizacion: 0,
        datos: {
            tipo: '',
            origen: '',
            dia: '',
            insumos: '',
            extras: '',
        }
    });

    const[cargando, guardarCargando] = useState(false);

    //extraer datos
    const {cotizacion, datos} = resumen;

    return(
        <Contenedor>
            <Header
                titulo='Contizador de Plantas'
            />

            <ContenedorFormulario>
                <Formulario
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />

                {cargando ? <Spinner/> : null}

                <Resumen
                    datos={datos}
                />

                {!cargando ?
                    <Resultado
                        cotizacion={cotizacion}
                    /> : null
                }
            </ContenedorFormulario>
        </Contenedor>
    );
}

export default CotizarPlanta;