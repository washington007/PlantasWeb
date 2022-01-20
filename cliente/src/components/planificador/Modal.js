import React from 'react';
import { useState, useEffect } from 'react';
import Mensaje from './Mensaje'
import CerrarBtn from '../../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    //creo mi funcion para cerra la pantalla modal
    const ocultarModal = () =>{
        //tomar en consideracion que es para dar ese efecto
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    //esto me sirve para enviar el formulario del modal
    const handleSubmit = e => {
        e.preventDefault();
        console.log('enviando formulario');

        //validando si esta vacio otra forma
        if([nombre, cantidad, categoria].includes('')){
            //validando con el props del setMensaje y en el return ojo que sale del component mensaje
            setMensaje('Todos los campos son obligatorios')

            //declarar cierto tiempo para que este el mensaje 
            setTimeout(() =>{
                setMensaje('')
            },3000)
            return;
        }
        guardarGasto({nombre, cantidad, categoria , id, fecha})
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={e =>  setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la cantidad del gasto"
                        value={cantidad}
                        onChange={e =>  setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e =>  setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="alimenticias">Alimenticias</option>
                        <option value=" medicinal">Medicinal</option>
                        <option value="ornamental">Ornamental</option>
                        <option value="cesped">Cesped</option>
                        <option value="bonsai">Bonsai</option>
                        <option value="cactus">Cactus</option>
                        <option value="arboles">Arboles</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Añadir Gasto"
                />

            </form>
        </div>
    )
}

export default Modal
