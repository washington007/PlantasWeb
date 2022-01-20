import React, { useReducer } from 'react';
import citaContext from './citaContext';
import citaReducer from './citaReducer';

import { 
    FORMULARIO_CITA, 
    OBTENER_CITAS,
    AGREGAR_CITA,
    CITA_ERROR,
    VALIDAR_FORMULARIO,
    CITA_ACTUAL,
    ELIMINAR_CITA
} from '../../types';

import clienteAxios from '../../config/axios';

const CitaState = props => {
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null, 
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(citaReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_CITA
        })
    }

    // Obtener la cita
    const obtenerCitas = async () => {
        try {
            const resultado = await clienteAxios.get('/api/crear-cita');

            dispatch({
                type: OBTENER_CITAS,
                payload: resultado.data.crear-cita
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CITA_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar nueva cita
    const agregarCita = async cita =>{
        try{
            const resultado = await clienteAxios.post('/api/crear-cita', cita);
            console.log(resultado);
            //Insertar el cliente en el state
            dispatch({
                type: AGREGAR_CITA,
                payload: resultado.data
            })
        }catch (error){
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CITA_ERROR,
                payload: alerta
            })
        }
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona ls cita que el usuario dio click
    const citaActual = proyectoId => {
        dispatch({
            type: CITA_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina una cita
    const eliminarCita = async citaId => {
        try {
            await clienteAxios.delete(`/api/citas/${citaId}`);
            dispatch({
                type: ELIMINAR_CITA,
                payload: citaId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: CITA_ERROR,
                payload: alerta
            })
        }
    }


return (
    <proyectoContext.Provider
        value={{
            citas: state.citas,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            cita: state.cita,
            mensaje: state.mensaje,
            mostrarFormulario,
            obtenerCitas,
            agregarCita,
            mostrarError,
            citaActual,
            eliminarCita
        }}
    >
        {props.children}
    </proyectoContext.Provider>
)
}

export default ProyectoState;