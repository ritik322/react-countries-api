import { useState } from "react"
import Header from "./components/Header"

import { Outlet } from "react-router-dom"


function App() {
  const [isDarkMode,setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  if(isDarkMode){
    document.body.classList.add('dark')
  }
  else{
    document.body.classList.remove('dark')
  }

  return(
    <>
    <Header setIsDarkMode = {setIsDarkMode}  isDarkMode = {isDarkMode} />
    <Outlet />
    </>
  )
    
  
}

export default App
