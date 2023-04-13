import Weather from '../assets/Weather.png';

function Project2() {
    return (
        <div className='ProjectContainers'>
            <a href ="https://muchmuchiercoding.github.io/weather-dashboard/">
            <img src={Weather} alt="Weather Dashboard" className='ProjectImages'></img>
            {/* <div class="overlay"><div class="text">Weather Dashboard</div></div> */}
            </a>
        </div>
    );
}

export default Project2;