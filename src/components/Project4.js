import Team from '../assets/TeamProfileGenerator.png';

function Project4() {
    return (
        <div className='ProjectContainers'>
            <a href ="https://github.com/MuchMuchierCoding/Team-Profile-Generator">
            <img src={Team} alt="Team Profile Generator" className='ProjectImages'></img>
            {/* <div class="overlay"><div class="text">Team Profile Generator</div></div> */}
            </a>
        </div>
    );
}

export default Project4;