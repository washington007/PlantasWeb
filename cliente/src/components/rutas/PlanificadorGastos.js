import React, {useState, useEffect} from 'react';
import Header from '../planificador/Header';
import ListadoGasto from '../planificador/ListadoGasto';
import Modal from '../planificador/Modal';
import Filtros from '../planificador/Filtros';
import { generarId } from '../helpers';
import IconoNuevoGasto from '../../img/nuevo-gasto.svg';
import Gasto from '../planificador/Gasto';
import ControlPresupuesto from '../planificador/ControlPresupuesto';

function PlanificadorGastos(){

    const [gastos, setGastos] = useState(
        //lo que hay en string le convierte a json caso contrario inicia como vacio
        localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
    );

    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem('presupuesto')) );

    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const [filtro, setFiltro] = useState('')

    //se crea para no perder la referencia
    const [gastosFiltrados, setGastosFiltrados] = useState([])

    //este effect se ejecuta cuando cambie a presupuesto
    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto)
    }, [presupuesto])

    //este effect se ejecuta cuando cambie a gasto
    useEffect(() => {
        //no se puede almacenar arreglo por eso se debe cambiar 
        localStorage.setItem('gastos', JSON.stringify(gastos) );
    }, [gastos])

    //este effect se ejecuta  sola vez cuando carga la app
    useEffect(() =>{
        if(filtro){
            const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
            setGastosFiltrados(gastosFiltrados)
        }
    },[filtro]);

    //tomar en ocsideracion que se guarda en el localstorage
    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto'));
        //si es >0 pasa la pantalla de presupuesto
        if(presupuestoLS > 0){
            setIsValidPresupuesto(true)
        }
    }, []);

    //se crea la funcion para que abra mi ventana modal ojo que se inicia en falso
    const handleNuevoGasto = () => {
        setModal(true)

        //ojo que se cre un use state y se ocupa el setanimarmodal
        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }

    const guardarGasto = gasto => {
        if(gasto.id){
            //Actualizar
            const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto: gastoState)
            setGastos(gastosActualizados);

        }else{
            //Nuevo Gasto
            gasto.id = generarId();
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto])
        }
        //ojo no se pone el return por que nececesito el animar
        setAnimarModal(false)
        //esta parte permite que anime el modal despues de un tiempo 
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        //esto me ayuda cuando hay muchos productos se hace scroll es para tapar el modal 
        <div className={modal ? 'fijar' : ''}>
            <Header
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto && (
                <>
                    <main>

                        <Filtros
                            filtro={filtro}
                            setFiltro={setFiltro}
                        />
                        <ListadoGasto
                            gastos={gastos}
                            filtro={filtro}
                            gastosFiltrados={gastosFiltrados}
                        />

                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={IconoNuevoGasto}
                            alt="icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            )}

            {modal && <Modal
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto={guardarGasto}
            />}

        </div>
    );
}

export default PlanificadorGastos
