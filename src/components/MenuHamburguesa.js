import "./MenuHamburguesa.css"
import {useEffect, useState} from "react"
const MenuHamburguesa = () => {
    const [mostrarBoton, setMostrarBoton] = useState(false)
    const [mostrarMenu,setMostrarMenu]=useState(false);

    const manejadorEventoScroll=()=>{
        if(window.innerHeight/1.2<=window.scrollY){
            setMostrarBoton(true);
        }else{
            setMostrarBoton(false);
            setMostrarMenu(false);
        }    
    }

    const handleClick=()=>{
        if(mostrarMenu){
            setMostrarMenu(false)
        }else{
            setMostrarMenu(true)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",manejadorEventoScroll)
    },[])
    return (
        <div className={"contenedor-hamburguesa "+ (mostrarBoton?"aparecer-boton ":"")}>
            <button 
            onClick={()=>handleClick()}
            className={"panel-btn hamburger hamburger--vortex " + 
            (mostrarMenu?"is-active ":"")+
            (mostrarBoton?"cursor-pointer":"")
            } 
            type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <span className={"links-container " + (mostrarMenu?"menu-visible":"")}>
                <a className="link-inicio"href="#inicio">Inicio</a>
                <a href="#aboutme">Acerca de mi</a>
                <a href="#habilidades">Habilidades</a>
                <a className="link-final" href="#contacto">Contacto</a>  
            </span>
        </div>
    )
}

export default MenuHamburguesa
