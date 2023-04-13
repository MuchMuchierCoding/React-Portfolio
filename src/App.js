import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'
import { useState } from 'react';
import Page from './components/Page';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');


  return (
    <div className="App">
      <div class="background"></div>
      <div class="main">
      <Header setCurrentPage={setCurrentPage}/>
      <Hero />
      <Page currentPage={currentPage}/>
      <Footer />
      </div>
    </div>
  );
}

export default App;

//className="(name for css)"