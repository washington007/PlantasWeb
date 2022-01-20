import { 
    FORMULARIO_CITA, 
    OBTENER_CITAS,
    AGREGAR_CITA,
    CITA_ERROR,
    VALIDAR_CITA,
    CITA_ACTUAL,
    ELIMINAR_CITA
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_CITAS:
            return {
                ...state,
                citas: action.payload
            }
        case AGREGAR_CITA:
            return {
                ...state,
                citas: [...state.citas, action.payload],
                formulario: false,
                errorformulario: false
            }
        case CITA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
    }
}