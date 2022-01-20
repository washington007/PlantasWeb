import React, { useReducer } from 'react';
import cotizadorContext from './cotizadorContext';
import cotizadorReducer from './cotizadorReducer';

import { 
    FORMULARIO_COTIZADORS, 
    OBTENER_COTIZADORS,
    AGREGAR_COTIZADORS,
    COTIZADORS_ERROR,
    VALIDAR_COTIZADORS,
    COTIZADORS_ACTUAL,
    ELIMINAR_COTIZADORS
} from '../../types';

import clienteAxios from '../../config/axios';


export default CotizadorState;