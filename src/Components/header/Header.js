import React from 'react'
import './header.css'; 

function Header() {
  return (
   <header className='header_main'>
    <div className='header'>
      <font color="white">EDISONVALLEY</font>
    </div>
    <ul className='header_items'>
      <li>Home</li>
      <li>About</li>
      <li>Features</li>
      <li>Team</li>
      </ul>
      <button>Sign In</button>
      </header>
    
  )
}

export default Header
