import coolDuck from "../assets/img/cool-rubber-duck.jpg";

const About = () => {
    return (
        <div className="container pt-5 d-flex flex-column">
            <p>
                La méthode du canard en plastique, appelée également méthode du canard en caoutchouc, est une pratique de revue du code source utilisée en génie logiciel dans les phases de débogage.
            </p>
            <img 
                src={`${coolDuck}`} 
                alt="Cool rubber duck"
                className="align-self-center pb-3"
            />
            <p>
                L'avantage du canard en plastique sur un interlocuteur humain est que sa capacité d'écoute et sa patience sont sans limite. Son temps est aussi moins précieux que celui d'un consultant ou d'un collègue3. Le fait qu'il soit petit permet de le placer discrètement à côté d'un écran d'ordinateur.
            </p>
        </div>
    )
}

export default About