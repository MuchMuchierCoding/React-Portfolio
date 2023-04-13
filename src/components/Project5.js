import Employee from '../assets/Employee.png';

function Project5() {
    return (
        <div className='ProjectContainers'>
            <a href ="https://github.com/MuchMuchierCoding/Employee-Tracker">
            <img src={Employee} alt="Employee Tracker" className='ProjectImages'></img>
            {/* <div class="overlay"><div class="text">Employee Tracker</div></div> */}
            </a>
        </div>
    );
}

export default Project5;