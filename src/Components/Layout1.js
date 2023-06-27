import React from 'react'
import Header from './header/Header';
import Page1 from './mainpage/Page1';
import Footer from './footer/Footer';
function Layout1({children}) {
  return (
    <div >
       <Header/>
       <div>
       <Page1/>
       <div>
        <Footer/>
       <div style={{width:"100%"}}>{children}</div>
       </div>
       </div> 
    </div>
  )
}

export default Layout1