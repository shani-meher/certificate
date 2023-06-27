import React, { useState, useEffect } from 'react';
import './Pagebody6.css';
import Layout from "../Layout";
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';


function Pagebody6() {
    const [tableData, setTableData] = useState([]);
    const params = useParams();
    const courseId = params.id;
    console.log(courseId);
  
    const handleButtonClick = (id) => {
        const updatedData = tableData.filter((row) => row.id !== id);
        setTableData(updatedData);
        };
        const navigate = useNavigate();
        useEffect(() => {
          // Fetch the table data from the backend API
          axios.get('http://127.0.0.1:8000/course/course/')
            .then((response) => {
                setTableData(response?.data?.results);
            })
            .catch((error) => {
              console.log(error);
            });
        },[]);
       
        const handleDelete = (courseId) => {
          console.log(courseId);
          axios.delete(`http://127.0.0.1:8000/course/course/${courseId}/`)
            .then((response) => {
              console.log('Data deleted successfully:', response.data);
              setTableData(prevTableData => prevTableData.filter(row => row.id !== courseId));
            })
            .catch((error) => {
              console.log('Error deleting data:', error);
            });
          }
      


  return (
    <>
    <Layout>
    <div className=' main_pagebody6'>
    <div className='pagebodyhead6'>
        <h4>COURSES</h4>
        </div>
        <table>
      <thead>
        <tr>
         
          <th>ID</th>
          <th>COURSE NAME</th>
          <th>DURATION</th>
          <th>COURSE CATEGORY</th>
          <th>ACTION</th>
         
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.course_name}</td>
            <td>{row.duration}</td>
            <td>{row.course_category_name}</td>
            <td ><Link to={`/Pagebody8/${row.id}`}>{<button onClick={() => handleButtonClick(row.action)}>Edit</button>}</Link>
            <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
           
          </tr>
        ))}
      </tbody>
      </table>
        </div>
        </Layout>
        </>
  )
}

export default Pagebody6