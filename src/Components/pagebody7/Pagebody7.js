import React, { useState, useEffect } from 'react';
import './Pagebody7.css';
import Layout from "../Layout";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {map} from "lodash";


function Pagebody7() {
  const navigate=useNavigate()
  const [userstate, setUserstate] = useState({})
  console.log(userstate);
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      // Add the selected course category option value to the userstate object
      const updatedUserstate = {
        ...userstate,
        course_category: selectedOption,
      };
     
      axios.post('http://127.0.0.1:8000/course/course/', updatedUserstate)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          navigate("/Pagebody1");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  
  const [courseCategories, setCourseCategories] = useState([]);
  useEffect(() => {
    // Fetch the course categories from the backend
    axios.get('http://127.0.0.1:8000/course/course_category/')
      .then((response) => {
        setCourseCategories(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
   console.log(courseCategories);
    
  return (
     <>
    <Layout>
    <div className=' main_pagebody7'>
    <div className='pagebodyhead7'>
        <h4>CREATE COURSE</h4>
        </div>
        <div className='compo1_pagebody7'>
         
          <form>
            <label htmlfor="course_name">Course Name:</label>
            <input type="text"onChange={(e) => setUserstate({ ...userstate, course_name: e.target.value })} placeholder="Enter Course" ></input>
            <label htmlfor="duration">Duration:</label>  
            <input type= "text" onChange={(e) => setUserstate({ ...userstate, duration: e.target.value })} placeholder="Enter Duration" />
           
            <label>
  Course Category:
  <select value={selectedOption} onChange={handleChange}>
  <option value="">Select a course category</option>
  {map(courseCategories,(Category)=>(
    <option key={Category.id} value={Category.id}>
      {Category?.course_category_name}
    </option>
   ))} 
</select>

</label>
        <button type="submit" onClick={handlesubmit}>Create</button>
        <Link to = '/Pagebody1'><button type="submit" >Back</button></Link>
            </form>
            </div>
        </div>
        </Layout>
        </>
  )
}


export default Pagebody7