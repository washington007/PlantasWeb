//obtiene la diferencia de años
export function obtenerDiferenciaDay(day){
    return new Date().getDay() - day;
}

//calcula el total a pagar segun la planta
export function calcularPlanta(tipo){
    let incremento;

    switch(tipo){
        case 'ornamental':
            incremento = 1.05;
            break;
        case 'medicinal':
            incremento = 1.15;
            break;
        case 'alimenticias':
            incremento = 1.30;
            break;
        default:
            break;
    }
    return incremento;
}

//Calcular el tipo de seguro
export function obtenerOrigen(origen){
    return (origen === 'vivero')? 1.20 : 1.50;
}

//calcula el total de insumos a pagar segun la planta
export function calcularInsumos(insumos){
    let incremento;

    switch(insumos){
        case 'fertilizantes':
            incremento = 1.05;
            break;
        case 'insecticidas':
            incremento = 1.10;
            break;
        case 'pesticidas':
            incremento = 1.15;
            break;
        case 'fungicidas':
            incremento = 1.20;
            break;
        default:
            break;
    }
    return incremento;
}

//calcula el extra para pagar segun la planta
export function calcularExtra(extra){
    let incremento;

    switch(extra){
        case 'tierra':
            incremento = 1.05;
            break;
        case 'abono':
            incremento = 1.10;
            break;
        case 'cascajo':
            incremento = 1.15;
            break;
        case 'macetas':
            incremento = 1.20;
            break;
        default:
            break;
    }
    return incremento;
}