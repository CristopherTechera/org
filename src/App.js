import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
//import logo from './logo.svg';
import './App.css';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipos/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState (false);
  const [colaboradores, actualizarColaboradores] = useState ([
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Hardland",
      puesto:"Instructor",
      fav: true
    }
    ,
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Eduardo",
      puesto:"Programador Jr",
      fav: false
    }
    ,
    {
      id: uuid(),
      equipo:"Innovación y Gestión",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Cristopher",
      puesto:"SEO jr",
      fav: false

    }

  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo : 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    }
    ,
    {
      id: uuid(),
      titulo : 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    }
    ,
    {
      id: uuid(),
      titulo : 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    }
    ,
    {
      id: uuid(),
      titulo : 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    }
    ,{
      id: uuid(),
      titulo : 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    }
    ,
    {
      id: uuid(),
      titulo : 'Móbil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    }
    ,
    {
      id: uuid(),
      titulo : 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    }
    ,

  ])



  //Ternario --> condicion ? SeMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

    //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

    //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //Colaboradores Favoritos
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if( colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )
    
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div className="App">
      <Header/>
      {/* mostrarFormulario ? <Formulario/> : <></> */}
      { 
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores={colaboradores.filter ( colaborador => colaborador.equipo === equipo.titulo ) }
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          /> 
        )
      }

      <Footer />

    </div>
  );
}


export default App;
