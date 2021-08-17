import "./Habilidades.css"
import {useOnScreen} from "../helpers/useOnScreen.js"
const Habilidades = () => {

    const [texto,textoVisible]=useOnScreen({rootMargin:"1500px 0px -50% 0px"})
    const [iconos,iconosVisible]=useOnScreen({rootMargin:"1500px 0px -50% 0px"})
    return (
        <div className="habilidades-container"
        id="habilidades"
        >
            <div ref={texto} className={"texto-container " + (textoVisible?"aparecerTexto":" desaparecer")}>
                <div>
                    <h2>Habilidades</h2>
                    <p>En esta sección podrás ver las tecnologías que domino</p>
                </div>
            </div>
            <div ref={iconos} className={"icons-container " + (iconosVisible?"aparecerIconos":" desaparecer")}>
                <ul>
                    <li>
                        <i className="fab fa-html5"></i>
                        <span>HTML</span>
                    </li>
                    <li>
                        <i className="fab fa-css3-alt"></i>
                        <span>CSS</span>
                    </li>
                    <li>
                        <i className="fab fa-js-square"></i>
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <i className="fab fa-react"></i>
                        <span>React</span>
                    </li>
                    <li>
                        <i className="fab fa-node"></i>
                        <span>Node.js</span>
                    </li>
                    <li>
                        <i className="fab fa-git-alt"></i>
                        <span>Git</span>
                    </li>
                    <li>
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Habilidades
