import React,{useState,useEffect} from 'react';
import './Pagebody8.css';
import Layout from "../Layout";
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import {map} from "lodash";




function Pagebody8() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form submission or other actions with the selected option
      console.log('Selected option:', selectedOption);
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
 

     const [tableData, setTableData] = useState();
     const [course, setCourse] = useState({});
     const params = useParams();
     const courseId = params.id;
     console.log(courseId);
  useEffect(() => {
      axios.get(`http://127.0.0.1:8000/course/course/${courseId}/`)
        .then(response => {
          setTableData(response?.data);
        })
        .catch(error => {
          console.error('Error fetching table data:', error);
        });
    }, [courseId]);
  
    console.log(tableData);

    useEffect(() => {
      // Fetch the student data from the backend API
      axios
        .get(`http://127.0.0.1:8000/course/course/${courseId}/`)
        .then((response) => {
          setCourse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [courseId]);
  

    const handleUpdate = () => {
      const updatedData = {
        course_name: course.course_name,
        duration: course.duration,
        course_category: selectedOption
      };
    
      axios
        .put(`http://127.0.0.1:8000/course/course/${courseId}/`, updatedData)
        .then((response) => {
          console.log('Data updated successfully:', response.data);
          // Perform any necessary actions upon successful update
        })
        .catch((error) => {
          console.log('Error updating data:', error);
        });
    };
    
    
    
  return (
     <>
    <Layout>
    <div className=' main_pagebody8'>
    <div className='pagebodyhead8'>
        <h4>UPDATE COURSE</h4>
        </div>
        <div className='compo1_pagebody8'>
         
<form onSubmit={handleSubmit}>
<label htmlfor="course_name">Course Name:</label>
<input
  type="text"
  value={course.course_name}
  onChange={(event) =>
    setCourse((prevState) => ({
      ...prevState,
      course_name: event.target.value
    }))
  }
  placeholder="Enter Course"
/>
<label htmlfor="duration">Duration:</label> 
<input
  type="text"
  value={course.duration}
  onChange={(event) =>
    setCourse((prevState) => ({
      ...prevState,
      duration: event.target.value
    }))
  }
  placeholder="Enter Duration"
/>
           
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
        <Link to={'/Pagebody6'}><button onClick={handleUpdate}>Update</button></Link>
        <Link to={'/Pagebody1'}><button>Back</button></Link>
            </form>
            </div>
        </div>
        </Layout>
        </>
  )
}


export default Pagebody8