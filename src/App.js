import './App.css';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Layout1 from './Components/Layout1';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Pagebody1 from './Components/pagebody1/Pagebody1';
import Pagebody2 from './Components/pagebody2/Pagebody2';
import Pagebody3 from './Components/pagebody3/Pagebody3';
import Pagebody4 from './Components/pagebody4/Pagebody4';
import Pagebody5 from './Components/pagebody5/Pagebody5';
import Pagebody6 from './Components/pagebody6/Pagebody6';
import Pagebody7 from './Components/pagebody7/Pagebody7';
import Pagebody8 from './Components/pagebody8/Pagebody8';
import Pagebody9 from './Components/pagebody9/Pagebody9';
import Pagebody10 from './Components/pagebody10/Pagebody10';
import Pagebodyfinal from './Components/pagebody11/Pagebodyfinal';



 
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/'element={<Layout1/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register'element={<Register/>}/>
        <Route path='/Pagebody1'element={<Pagebody1/>}/>
        <Route path='/Pagebody2'element={<Pagebody2/>}/>
        <Route path='/Pagebody3/:id'element={<Pagebody3/>}/>
        <Route path='/Pagebody4'element={<Pagebody4/>}/>
        <Route path='/Pagebody5/:id'element={<Pagebody5/>}/>
        <Route path='/Pagebody6'element={<Pagebody6/>}/>
        <Route path='/Pagebody7'element={<Pagebody7/>}/>
        <Route path='/Pagebody8/:id'element={<Pagebody8/>}/>
        <Route path='/Pagebody9'element={<Pagebody9/>}/>
        <Route path='/Pagebody10'element={<Pagebody10/>}/>
        <Route path='/Pagebodyfinal/:id'element={<Pagebodyfinal/>}/>


        
       
      </Routes>
      </Router>
      </div>
    
    
  );
}

export default App;
