import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)
    const [mostrar, actualizarMostrar] = useState(false);
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar);
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/public/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;