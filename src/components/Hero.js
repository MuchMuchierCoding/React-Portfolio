import Portrait from '../assets/Amanda.PNG'

function Hero() {
    return(
        <div class="PhotoBackground">
        <img className="Photo" src={Portrait} alt="Photo of Amanda"></img>
        </div>
    );
}

export default Hero;