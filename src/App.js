import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

import About from './components/About';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  return (
    <div className="App">
      <Navbar NavTitle="Textutils" aboutText="About"/> 
      <About mode={mode} />
    </div>
  );
}

export default App;
