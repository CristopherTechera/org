import { useState } from "react";
import { v4 as uuid } from 'uuid';

import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    //Crear Nuevo Equipo
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envío");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuid()
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
        
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo = "Nombre"
                placeholder = "Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo = "Puesto" 
                placeholder = "Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto titulo = "Foto" 
                placeholder = "Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor= {equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo = "Título"
                placeholder = "Ingresar título" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo = "Color" 
                placeholder = "Ingresar el color en Hexadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
        </section>
}

export default Formulario;