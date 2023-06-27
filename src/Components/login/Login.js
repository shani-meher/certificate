import React ,{useState}from 'react';
import axios from 'axios';
import'./Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
const eye = <FontAwesomeIcon icon={faEye} />;
function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const navigate=useNavigate()
  const [userstate, setUserstate] = useState({})
  console.log(userstate);
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://127.0.0.1:8000/auth/token/login/', userstate).then((res) => {
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
    <div className='log-main'>
        <h2>EDISONVALLEY</h2>
      <div className='log-component'>
          <h1>Login </h1>
          <form action=''>
          <label htmlfor="user_name">User Name</label>
            <input type="text"onChange={(e) => setUserstate({ ...userstate, username: e.target.value })} placeholder="User Name" ></input>
          <label htmlfor="Password">Password</label>  
            <input type={passwordShown ? "text" : "password"} name='Password'onChange={(e) => setUserstate({ ...userstate, password: e.target.value })} placeholder="Password" />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{""}
           
            
            <Link to = '/Pagebody1'><button type="submit" onClick={handlesubmit}>Login</button></Link>
            You don't have an account?<Link to='/Register'>Register</Link>
           
            
          
           </form>
      </div>
    </div>
  )
}

export default Login