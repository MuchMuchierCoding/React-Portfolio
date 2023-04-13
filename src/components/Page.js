import Bio from './Bio';
import Projects from './Projects';
import Contact  from './Contact';
import Resume from './Resume';


function Page(props) {
    const renderPage = () => {
        if (props.currentPage === 'About Me') {
            return <Bio />;
        }
        if (props.currentPage === 'Portfolio') {
            return <Projects />;
        }
        if (props.currentPage === 'Contact') {
            return <Contact />;
        }
        if (props.currentPage === 'Resume') {
            return <Resume />;
        }
    }
  
    return (
      <div className="Page">
        {renderPage()}
      </div>
    );
  }
  
  export default Page;