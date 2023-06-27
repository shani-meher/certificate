import React,{useState} from 'react';
import axios from 'axios';
import'./Register.css';
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate()
  const [userstate, setUserstate] = useState({})
  console.log(userstate);
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://127.0.0.1:8000//auth/users/', userstate).then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        navigate("/Pagebody1")
      }
      )
    }
    catch (error) {
      console.log(error);
    }
  }
  
  
  return (
    <div className='register-main'>
        <h2>EDISONVALLEY</h2>
      <div className='register-component'>
          <h1>Register Account</h1>
          <form action=''>
            <label htmlfor="username">User Name</label>
            <input type="text" onChange={(e) => setUserstate({ ...userstate, username: e.target.value })} placeholder="User Name" ></input>
            <label htmlfor="password">Password</label>  
            <input type= "password" name='password'onChange={(e) => setUserstate({ ...userstate, password: e.target.value })} placeholder="Password" />
           
            By registering you agree to the Terms use
              
              <Link to='/Pagebody1'><button type="submit">Login</button></Link>
           Already have An Account?
            <Link to='/Login'>Login</Link>
            
          
           </form>
      </div>
    </div>
  )
}

export default Register