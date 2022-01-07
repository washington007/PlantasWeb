import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, calcularPlanta, obtenerOrigen, calcularInsumos, calcularExtra} from '../Cotizador/helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: auto;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &::hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) =>{

    const [datos, guardarDatos] = useState({
        tipo: '', 
        origen: '', 
        year: '', 
        insumos: '', 
        extra: ''
    });

    const [error, guardarError] = useState(false);

    //extraer los valores del state
    const{tipo, origen, year, insumos, extra} = datos

    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if(tipo.trim() === '' || origen.trim() === '' || year.trim() === '' || insumos.trim() === '' || extra.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false); 

        //Una base de 20
        let resultado = 20;

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        //por cada año hay que restar el 3%
        resultado -= ((diferencia * 3 ) * resultado) / 100;

        //Ornamental 10%
        //Medicinal 15%
        //Alimenticia 20%
        resultado = calcularPlanta(tipo) * resultado;
        console.log(resultado);

        //Basico aumenta 20%
        //Completo 50%
        const incrementoOrigen = obtenerOrigen(origen);
        resultado = parseInt(incrementoOrigen * resultado).toFixed(2);

        //Fertilizantes 5%
        //Insecticidas 10%
        //Pesticidas 15%
        //Fungicidas 20%
        resultado = calcularInsumos(insumos) * resultado;

        //Tierra 5%
        //Abono 10%
        //Cascajo 15%
        //Macetas 20%
        resultado = calcularExtra(extra) * resultado;

        guardarCargando(true);

        setTimeout(()=> {
            //Elimina el Spinner
            guardarCargando(false);
            
            //pasa la informacion al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);
    }

    return(
        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Tipo de Planta</Label>
                <Select
                    name="tipo"
                    value={tipo}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="alimenticias">Alimenticias</option>
                    <option value="medicinal">Medicinal</option>
                    <option value="ornametal">Ornamental</option>
                </Select>
            </Campo>

            <Campo>
               <Label>Origen</Label>
               <InputRadio
                    type="radio"
                    name="origen"
                    value="vivero"
                    checked={origen === "vivero"}
                    onChange={obtenerInformacion}
               /> Vivero

                <InputRadio
                    type="radio"
                    name="origen"
                    value="huerto"
                    checked={origen === "huerto"}
                    onChange={obtenerInformacion}
               /> Huerto
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Insumos</Label>
                <Select
                    name="insumos"
                    value={insumos}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="fertilizantes">Fertilizantes</option>
                    <option value="insecticidas">Insecticidas</option>
                    <option value="pesticidas">Pesticidas</option>
                    <option value="fungicidas">Fungicidas</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Extra</Label>
                <Select
                    name="extra"
                    value={extra}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="tierra">Tierra</option>
                    <option value="abono">Abono</option>
                    <option value="cascajo">Cascajo</option>
                    <option value="macetas">Macetas</option>
                </Select>
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    );
}

export default Formulario; 