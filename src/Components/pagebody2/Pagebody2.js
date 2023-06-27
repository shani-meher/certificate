import React, { useState, useEffect } from 'react';
import './Pagebody2.css';
import Layout from "../Layout";
import ButtonImage from '../ButtonImage/search-icon-free-vector.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Pagebody2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  const navigate = useNavigate();
  const [userstate, setUserstate] = useState({});
  console.log(userstate);

  useEffect(() => {
    // Fetch the table data from the backend API
    axios.get('http://127.0.0.1:8000/student/student/')
      .then((response) => {
          setTableData(response?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  console.log(tableData);

  return (
    <>
      <Layout>
        <div className='main_pagebody2'>
          <div className='pagebodyhead1'>
            <h4>STUDENTS</h4>
          </div>
          <div className='compo1_pagebody2'>
            <img
              src={ButtonImage}
              alt="Button"
              onClick={handleSearch}
              style={{ cursor: 'pointer' }}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Joining date</th>
                  <th>Dob</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Leaving date</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.full_name}</td>
                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                    <td>{row.start_date}</td>
                    <td>{row.dob}</td>
                    <td>{row.designation}</td>
                    <Link to={`/Pagebody5/${row.id}`}>
                    <img src={row.photo} alt="Student Photo" />

                      </Link>
                    <td>{row.end_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Pagebody2;
