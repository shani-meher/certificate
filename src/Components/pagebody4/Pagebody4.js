import React,{useState} from 'react';
import './Pagebody4.css';
import Layout from "../Layout";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Pagebody4() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
    const handlesubmit = (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('full_name', userstate.full_name);
        formData.append('email', userstate.email);
        formData.append('dob', userstate.dob);
        formData.append('address', userstate.address);
        formData.append('designation', userstate.designation);
        formData.append('start_date', userstate.start_date);
        formData.append('end_date', userstate.end_date);
        formData.append('phone', userstate.phone);
    
        axios.post('http://127.0.0.1:8000/student/student/', formData).then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          navigate('/Pagebody1');
        });
      } catch (error) {
        console.log(error);
      }
    };
    
    const navigate=useNavigate()
    const [userstate, setUserstate] = useState({})
    console.log(userstate);
    
  return (
    <>
    <Layout>
    <div className=' main_pagebody4'>
    <div className='pagebodyhead4'>
        <h4>CREATE STUDENT</h4>
        </div>
        <form action=''>
            <div className='section1'>
            <label htmlfor="full_name">Full_Name: </label>
            <input type="text" onChange={(e) => setUserstate({ ...userstate, full_name: e.target.value })}placeholder="Full Name" ></input>
            <label htmlfor="email">Email:</label>  
            <input type= "email" name='email'  onChange={(e) => setUserstate({ ...userstate, email: e.target.value })}placeholder="Email" />
            <label htmlfor="dob">DOB:</label>  
            <input type= "text" name='dob' onChange={(e) => setUserstate({ ...userstate, dob: e.target.value })}placeholder="DOB" />
            <label htmlfor="address">Address:</label>  
            <input type= "text" name='address' onChange={(e) => setUserstate({ ...userstate, address: e.target.value })} placeholder="Address" />
            </div>
            <div className='section2'>
            <label htmlfor="designation">Designation:</label>  
            <input type= "text" name='designation'onChange={(e) => setUserstate({ ...userstate, designation: e.target.value })} placeholder="Designation" />
            <label htmlfor="start_date">Joining Date:</label>  
            <input type= "date" name='start_date'onChange={(e) => setUserstate({ ...userstate, start_date: e.target.value })} placeholder="Joining Date" />
            <label htmlfor="end_date">Leaving Date:</label>  
            <input type= "date" name='end_date'onChange={(e) => setUserstate({ ...userstate, end_date: e.target.value })}placeholder="Leaving Date" />
            <label htmlfor="phone">Phone Number:</label>  
            <input type= "text" name='phone'onChange={(e) => setUserstate({ ...userstate, phone: e.target.value })} placeholder="Phone Number" />
            </div>
            </form>
            <div className='section3'>
            <label>image:</label> 
           <input type="file" onChange={handleFileChange} /> 
         {selectedFile && <p>Selected file: {selectedFile.name}</p>} 
            <Link to = '/Pagebody1'><button type="submit" >Back</button></Link>
            <button type="submit" onClick={handlesubmit}>Create</button>
           </div>
           

     
    </div>
    </Layout>
    </>
  )
}

export default Pagebody4