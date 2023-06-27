import React, { useState, useEffect } from 'react';
import './Pagebody3.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout';
import axios from 'axios';

function Pagebody3() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userstate, setUserstate] = useState({});
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const studentId = params.id;

  useEffect(() => {
    // Fetch the student data from the backend API
    axios
      .get(`http://127.0.0.1:8000/student/student/${studentId}/`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [studentId]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append the updated userstate values
    for (const key in userstate) {
      formData.append(key, userstate[key]);
    }

    // Append the selected file
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      axios
        .put(`http://127.0.0.1:8000/student/student/${studentId}/`, formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          navigate('/Pagebody2');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className='main_pagebody3'>
          <div className='pagebodyhead3'>
            <h4>UPDATE STUDENT</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='section1'>
              <label htmlFor='full_name'>Full_Name:</label>
              <input
                type='text'
                defaultValue={student.full_name}
                onChange={(e) => setUserstate({...userstate, full_name: e.target.value })}
                placeholder='Full Name'
              ></input>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                defaultValue={student.email}
                onChange={(e) => setUserstate({ ...userstate, email: e.target.value })}
                placeholder='Email'
              />
              <label htmlFor='dob'>DOB:</label>
              <input
                type='text'
                name='dob'
                defaultValue={student.dob}
                onChange={(e) => setUserstate({ ...userstate, dob: e.target.value })}
                placeholder='DOB'
              />
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                name='address'
                defaultValue={student.address}
                onChange={(e) => setUserstate({ ...userstate, address: e.target.value })}
                placeholder='Address'
              />
            </div>
            <div className='section2'>
              <label htmlFor='designation'>Designation:</label>
              <input
                type='text'
                name='designation'
                defaultValue={student.designation}
                onChange={(e) => setUserstate({ ...userstate, designation: e.target.value })}
                placeholder='Designation'
              />
              <label htmlFor='start_date'>Joining Date:</label>
              <input
                type='date'
                name='start_date'
                defaultValue={student.start_date}
                onChange={(e) => setUserstate({ ...userstate, start_date: e.target.value })}
                placeholder='Joining Date'
              />
              <label htmlFor='end_date'>Leaving Date:</label>
              <input
                type='date'
                name='end_date'
                defaultValue={student.end_date}
                onChange={(e) => setUserstate({ ...userstate, end_date: e.target.value })}
                placeholder='Leaving Date'
              />
              <label htmlFor='phone'>Phone Number:</label>
              <input
                type='text'
                name='phone'
                defaultValue={student.phone}
                onChange={(e) => setUserstate({ ...userstate, phone: e.target.value })}
                placeholder='Phone Number'
              />
            </div>
            <div className='section3'>
              <label>Image:</label>
              <input type='file' onChange={handleFileChange} />
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              <button type='submit'>Update</button>
              <Link to='/Pagebody1'>
                <button type='button'>Back</button>
              </Link>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Pagebody3;
