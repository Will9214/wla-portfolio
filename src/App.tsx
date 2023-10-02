import './App.css';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import CursorBlob from './CursorBlob';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {

  useEffect(() => {
    CursorBlob();
  })


  return (
    
    <div className="App">
      <BrowserRouter>
        <div id="blob"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        

      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
