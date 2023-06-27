import React ,{useState}from 'react';
import axios from 'axios';
import Layout from '../Layout';
import './Pagebody10.css';
import { Link,useNavigate } from 'react-router-dom';

function Pagebody10() {
  const navigate=useNavigate()
  const [userstate, setUserstate] = useState({})
  console.log(userstate);
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://127.0.0.1:8000/course/course_category/', userstate).then((res) => {
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
    <>
    <Layout>
    <div className=' main_pagebody10'>
    <div className='pagebodyhead10'>
        <h4>CREATE COURSE CATEGORY</h4>
        </div>
        <div className='compo1_pagebody10'>
         
          <form action=''>
            <label htmlfor="course_category_name">Course Category:</label>
            <input type="text" onChange={(e) => setUserstate({ ...userstate, course_category_name: e.target.value })} placeholder="Enter Course Category" ></input>
            <label htmlfor="designation">Designation:</label>  
            <input type= "text" onChange={(e) => setUserstate({ ...userstate, designation: e.target.value })} placeholder="Enter Designation" />
            <button type="submit" onClick={handlesubmit}>Create</button>
            <Link to = '/Pagebody1'><button type="submit" >Back</button></Link>
            </form>
            </div>
        </div>
        </Layout>
        </>
  )
}


export default Pagebody10