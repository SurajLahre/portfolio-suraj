import React from 'react';
import { BrowserRouter , HashRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
    <HashRouter basename="/portfolio-suraj">
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
 </HashRouter>


  );
};

export default App;
