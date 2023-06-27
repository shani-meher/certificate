import React from 'react'
import { Link } from 'react-router-dom'
import'./Page1.css'
function Page1() {
  return (
    <div className='page1_main'>
        <div className='page1_item'>
        <h3> MAKE YOUR CAREER <br/>WITH EDISONVALLEY </h3> 
            <p>Whether you want to uncover the secrets of the universe, or you just want to pursue a career <br/> in the 21st century, basic computer programming is an essential skill to learn.</p>
           
            <Link to='/Login'> <button type='submit'>Login</button></Link>
        </div>
            <div className='page1img'>
           <img src="https://m.media-amazon.com/images/I/71hI16-vr6L._SX466_.jpg" alt="" />
          </div> 
        
    </div>
  )
}

export default Page1