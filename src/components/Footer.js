import LinkedIn from '../assets/LILogo.png';
import Twitter from '../assets/Twitterblue.png';
import Github from '../assets/github-mark.png';

function Footer() {
    return (
        <div>
        <div className="Footer">
            <div>
                <a href="https://github.com/MuchMuchierCoding" target='_blank' rel="noopener noreferrer">
                    <img src={Github} alt="Github Logo" className='ProLogos'></img>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/5littlepandas" target='_blank' rel="noopener noreferrer">
                    <img src={Twitter} alt="Twitter Logo" className='ProLogos'></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/amanda-paul-242bb4253/" target='_blank' rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn Logo" className='ProLogos'></img>
                </a>
            </div>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/taboneal/" target='_blank' rel="noopener noreferrer" className="ArtCredit">Background art created by Tab O'Neal</a>
        </div>
        </div>
    );
}

export default Footer;