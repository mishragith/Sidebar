import React,{useState} from 'react'
import './Sidebar.css'
import Sidebardata  from './Sidebardata';

function Sidebar() {
    const[isOpen,setIsOpen]= useState(true);
    const togglesidebar=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div className={`sidebar ${isOpen ? 'open':'closed'}`}>
        <div className='sidebar-header'>
            <button className="toggle-button" onClick={togglesidebar}>
                <div className={`arrow ${isOpen ? 'left':'right'}`}>

                </div>

            </button>
            <div className="logo">
                <h2>{isOpen? 'Sidebar':''}</h2>
            </div>

        </div>
        <div className='nav-menu'>
            <ul>
                <Sidebardata/>
            </ul>
            
        </div>
    </div>
  )
}

export default Sidebar