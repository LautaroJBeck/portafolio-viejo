
import { useOnScreen } from "../helpers/useOnScreen"
import "./AboutMe.css"




const AboutMe = () => {
    const [article,visible]=useOnScreen({rootMargin:"1500px 0px -50% 0px"})


    return (
        <article
        ref={article}
        className="article-container"
        id="aboutme"
        >
            <div className={"text-container " +(visible ?"identifier":"desaparecer")}>
                <h2>Acerca de mi experiencia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi numquam fugiat. Officia ducimus quis placeat corporis eum, commodi repudiandae, iste cupiditate voluptates optio voluptatem quas iure neque, enim magni?</p>
            </div>
        </article>      

    )
}

export default AboutMe
