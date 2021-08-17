import "./Contacto.css"

const Contacto = () => {

    return (
        <div className="contenedor"
        id="contacto"
        >
            <div className="contenedor-nombre">
                <h3>Lautaro Javier Beck Cardus</h3>
                <div>
                    <p>Programando en  &nbsp;</p>
                    <ul>
                        <li>Concepción</li>
                        <li>Paraguay</li>
                        <li>Latinoamérica</li>
                    </ul>
                </div>
            </div>
            <div className="contenedor-contacto">
                <h3>Contáctame</h3>
                <ul className="ul-container">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LautaroJBeck">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Contacto
