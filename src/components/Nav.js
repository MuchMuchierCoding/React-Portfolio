function Nav(props) {
    return (
        <nav className="Nav">
            <a className="Name">Amanda Paul</a>
            <a className="NavLinks" onClick={() => props.setCurrentPage('About Me')} >About Me</a>
            <a className="NavLinks" onClick={() => props.setCurrentPage('Portfolio')}>Portfolio</a>
            <a className="NavLinks" onClick={() => props.setCurrentPage('Resume')}>Resume</a>
            <a className="NavLinks" onClick={() => props.setCurrentPage('Contact')}>Contact</a>
        </nav>
    );
}

export default Nav;