import "./Footer.css"

const Footer = () => {                  // Ponemos acá en .js la dirección d la imagen por que si lo pongo en css REACT no lo va a encontrar
    return <footer className = "footer" style = {{ backgroundImage: "url(/img/Footer.png)" }}>
    <div className="redes">
        <a href="https://www.aluracursos.com/">
            <img src="/public/img/facebook.png" alt = 'Facebook' />
        </a>
        <a href="https://www.aluracursos.com">
            <img src="/public/img/twitter.png" alt = 'twitter' />
        </a>
        <a href="https://www.aluracursos.com">
            <img src="/public/img/instagram.png" alt = 'instagram' />
        </a>
    </div>
    <img src = '/img/Logo.png' alt="org" />
    <strong>Desarrollado por Cristopher Techera</strong>
</footer>
}

export default Footer