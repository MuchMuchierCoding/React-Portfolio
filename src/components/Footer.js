import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter-logo.png';
import Github from '../assets/github-mark.png';

function Footer() {
    return (
        <div className="Footer">
            <div>
                <a href="">
                    <img src={Github} alt="Github Logo" className='ProLogos'></img>
                </a>
            </div>
            <div>
                <a href="">
                    <img src={Twitter} alt="Twitter Logo" className='ProLogos'></img>
                </a>
            </div>
            <div>
                <a href="">
                    <img src={LinkedIn} alt="LinkedIn Logo" className='ProLogos'></img>
                </a>
            </div>
        </div>
    );
}

export default Footer;