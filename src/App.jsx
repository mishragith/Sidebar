import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Sidebardata from './components/Sidebar/Sidebardata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      {/* <Sidebardata/> */}
      
      
    </>
  )
}

export default App
