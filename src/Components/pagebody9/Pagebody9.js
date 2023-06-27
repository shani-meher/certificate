import React, { useState, useEffect } from 'react';
import './Pagebody9.css';
import Layout from "../Layout";
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Pagebody9() {
    const [tableData, setTableData] = useState([ ]);
    const params = useParams();
    const catId = params.id;
    console.log(catId);


    const handleButtonClick = (id) => {
      const updatedData = tableData.filter((row) => row.id !== id);
      setTableData(updatedData);
      };
    
        
      const navigate = useNavigate();
      useEffect(() => {
        // Fetch the table data from the backend API
        axios.get('http://127.0.0.1:8000/course/course_category/')
          .then((response) => {
              setTableData(response?.data?.results);
          })
          .catch((error) => {
            console.log(error);
          });
      },[]);

        const handleDelete = (catId) => {
          console.log(catId);
          axios.delete(`http://127.0.0.1:8000/course/course_category/${catId}/`)
            .then((response) => {
              console.log('Data deleted successfully:', response.data);
              setTableData(prevTableData => prevTableData.filter(row => row.id !== catId));
            })
            .catch((error) => {
              console.log('Error deleting data:', error);
            });
          }

  return (
    <>
    <Layout>
    <div className=' main_pagebody9'>
    <div className='pagebodyhead9'>
        <h4>COURSE CATEGORIES</h4>
        </div>
        <table>
      <thead>
        <tr>
          
          <th>ID</th>
          <th>COURSE CATEGORY</th>
          <th>DESIGNATION</th>
         <th>ACTION</th>
         
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
           
            <td>{row.id}</td>
            <td>{row.course_category_name}</td>
            <td>{row.designation}</td>
           <td ><Link to={`/Pagebodyfinal/${row.id}`}>{<button onClick={() => handleButtonClick(row.action)}>Edit</button>}</Link>
            {  <button onClick={() => handleDelete(row.id)}>Delete</button>}
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

export default Pagebody9