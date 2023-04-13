import Nav from './Nav';

function Header(props) {
    return (
      <header>
        <Nav setCurrentPage={props.setCurrentPage}/>
      </header>
    );
}

export default Header;