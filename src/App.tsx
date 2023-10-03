import './App.css';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import CursorBlob from './CursorBlob';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop';
import FitNBeGreat from './components/Projects/FitNBeGreat';
import Flashcard from './components/Projects/Flashcard';

function App() {

  useEffect(() => {
    CursorBlob();
  })


  return (
    
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div id="blob"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/fitnbegreat" element={<FitNBeGreat />} />
          <Route path="/projects/flashcard" element={<Flashcard />} />
        </Routes>
        

      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
