import video from "../assets/video.mp4"
import videopc from "../assets/videopc.mp4"
import "./Header.css"

const Header = () => {
    return (
        <>
        <div className="header"
        id="inicio">
                <video className="video" src={videopc} autoPlay muted loop/>
                <h2>Lautaro Beck</h2>
                <p>Desarrollador Front End</p>
        </div>
        
        </>
        
    )
}

export default Header
