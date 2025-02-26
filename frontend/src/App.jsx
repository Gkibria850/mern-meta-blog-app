import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState('false');

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}} >
      <Navbar/>
      <main className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Outlet/>
      </main>
      <Footer/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
