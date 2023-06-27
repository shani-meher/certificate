import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='main_foot'>
    
        <div className='footer1'>
            <h3>EDISONVALLEY</h3>
            <p> Software development provides a series of steps <br/>for programmers to create computer programs</p>
        </div>
        <div classname='footer2'>
            <h3>Resources</h3>
            <h5>Privacy Policy</h5>
            <h5>Terms&Guidlines</h5>
        </div>
        <div className='footer3'>
        <h3>Company</h3>
            <h4>About Us</h4>
            <h4>Features</h4>
            </div>
            <div className='footer4'>
                <h3>Social Links</h3>
                <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3udKe-SLcxP6qdXLwAdeb8uvMnklVfJSUuD03ZU34IA&usqp=CAU&ec=48600113'alt=''>
                </img>
              </div>
            </footer>
           
  )
}

export default Footer