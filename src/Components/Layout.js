import React from 'react'
import Header2 from './header2/Header2'
import Sidebar from './sidebar/Sidebar'

function Layout({children}) {
  return (
    <div style={{display:'flex'}}>
       <Sidebar/>
       <div style={{display:"flex",flexDirection:"column"}}>
       <Header2/>
       <div style={{width:"100%"}}>{children}</div>
       </div> 
    </div>
  )
}

export default Layout