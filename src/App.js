import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import React from 'react';
import Contact from './components/Contact';




function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Header/>
        
      </header>
      <main className="main">
      <About />
          <div classame="Works">
            <Work />
          </div>
      </main>
      <footer>
        <Contact />
      </footer>
      
      
      
    </div>
    
    
  );
}

export default App;
