import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useState } from 'react';
import Page from './components/Page';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');


  return (
    <div className="App">
      <div className="background"></div>
      <div className="main">
      <Header setCurrentPage={setCurrentPage}/>
      <Hero />
      <Page currentPage={currentPage}/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
