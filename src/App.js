import './App.css';
import About from './Components/About.js';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [able, setable] = useState('Enable');
  const [alert, setalert] = useState('');

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert('');
    }, 3000);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#36454F';
      setable('Disable');
      showAlert(" Dark Mode has been enabled", "success");
      document.title = "Text-Counter-Dark";
      setTimeout(() => {
        document.title = "Text-Counter";
      }, 3000);
    }
    else {
      setMode('light');
      setable('Enable');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled", "success");
      document.title = "Text-Counter-Light";
      setTimeout(() => {
        document.title = "Text-Counter";
      }, 3000);
    }
  }
  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="Jatin Mahawar" aboutText="About Me"/> */}
        <Navbar title="Text-Counter" mode={Mode} toggleMode={toggleMode} able={able} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={Mode}/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={Mode} />
            } />
          </Routes>
        </div >
      </BrowserRouter>
    </>
  );
}

export default App;
