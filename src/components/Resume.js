import pdf from '../assets/Resume2023.pdf';


function Resume() {
    return (
        <div>
        <div>
        <div className="ButtonContainer">
            <a href={pdf} target="_blank" className='ResumeButton'>Resume</a>
        </div>
        </div>
        <div className="Resume">
        <ul>
            <li>
            <a href="#" className='Super'><p>Growing superpower with Git and Github!</p></a>
            </li>
            <li>
            <a href="#" className='SkillsHeader'><p>Proficient and growing software development skills</p></a>
            </li>
            <li>
            <a href="#" className='Backend'><p>MySql, Node.js, Express.js, and MongoDB</p></a>
            </li>
            <li>           
            <a href="#" className='Frontend'><p>Javascript, React.js, CSS, HTML, JQuery</p></a>
            </li>
            <li>           
            <a href="#" className='Character1'><p>naturally curious, lover of learning, adaptable</p></a>
            </li>
            <li>           
            <a href="#" className='Character2'><p>thrives working in a team, creative problem solver</p></a>
            </li>
        </ul>
        </div>
        </div>
    )
}

export default Resume;