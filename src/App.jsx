import React, { useState } from 'react'
import Welcome from "./components/Welcome"
import BackgroundIcons from "./components/BackgroundIcons"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moon from './assets/img/moon.svg'
import sun from './assets/img/sun.svg'
import Validity from './components/Validity';
import Present from './components/Present';
import './components/FadeTransition.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <div>
          <BackgroundIcons></BackgroundIcons>
          <button onClick={toggleDarkMode} className='absolute p-0.5 flex justify-end top-5 right-5 rounded-full'>
            {isDarkMode ? <img src={moon} alt='dark' className='w-8 h-8' /> : <img src={sun} alt='light' className='w-8 h-8' />}
          </button>
          <div className="bday">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/mangea' element={<Validity isDarkMode={isDarkMode} />} />
                <Route path='/present' element={<Present isDarkMode={isDarkMode} />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
