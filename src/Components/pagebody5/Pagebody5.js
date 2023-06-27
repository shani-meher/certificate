import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagebody5.css';
import Layout from "../Layout";
import { useParams, Link, useNavigate } from 'react-router-dom';

function Pagebody5() {
  const [tableData, setTableData] = useState([]);
  const [studentData,setStudentData] = useState();
  const params = useParams();
  const studentId = params.id;
  console.log(studentId);

  const navigate = useNavigate();



  

  // useEffect(() => {
  //   // Fetch the table data from the backend API
  //   axios.get('http://127.0.0.1:8000/student/student_course/')
  //     .then((response) => {
  //       setTableData(response?.data?.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/student/student/${studentId}/`)
  //     .then(response => {
  //       setTableData(response?.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching table data:', error);
  //     });
  // }, [studentId]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tableDataResponse, studentDataResponse] = await Promise.all([
          axios.get('http://127.0.0.1:8000/student/student_course/'),
          axios.get(`http://127.0.0.1:8000/student/student/${studentId}/`)
        ]);
  
        const tableData = tableDataResponse?.data?.results;
        const studentData = studentDataResponse?.data;
        console.log(studentData);
  
        setTableData(tableData);
        setStudentData(studentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [studentId]);
  

  console.log(tableData);

  const [userstate, setUserstate] = useState({});
  console.log(userstate);

  const handleRemove = () => {
    axios.delete(`http://127.0.0.1:8000/student/student/${studentId}/`)
      .then((response) => {
        console.log('Data deleted successfully:', response.data);
      })
      .catch((error) => {
        console.log('Error deleting data:', error);
      });

    console.log(userstate);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/student/student_course/${id}/`)
      .then((response) => {
        console.log('Data deleted successfully:', response.data);
        // Remove the deleted row from the tableData state
        setTableData(tableData.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.log('Error deleting data:', error);
      });
  };

  
      
    






  

  return (
    <>
      <Layout>
        <div className='main_pagebody5'>
          <div className='pagebodyhead5'>
            <h4>STUDENT VIEW</h4>
          </div>
          <div className='compo1_pagebody5'>
            <img className='photo1' src={studentData?.image}></img>

            <h4>{studentData?.full_name}</h4>
            <h5>{studentData?.dob}</h5>
            <div className='photo2'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAY1BMVEX///8AAAD09PQVFRX8/Pz4+PgeHh4MDAwaGhoQEBDj4+M5OTkYGBi9vb3AwMDe3t7r6+soKCiVlZVvb29VVVXW1tZISEiEhITNzc2srKx9fX11dXWNjY1kZGQ+Pj40NDSgoKDLUpxaAAAEXklEQVR4nO2aiZLqKBSGJRCW7HtINHbe/ykHBCLRxLlVt8GpGr6yuszS8stZOJx4uQQCgUAgEAgEAoFAIBAIBP4vVH2e5331ZRURnzEDEoZnHn1NB5oGYDNM6DtCCgxewcUXdETXNx2Sq3cTVfdDIQDcPftu+W6ZzUKlTyFJug1Mh2W8jctAtzNp4lHJU8haqnhB5fqU4k9Iu+nYnd60tL6EFMY5+csFbtzYUzDHtRru5z1Kqh91qY69KGn0aEeOmWiVjQ8h6KMFjOV85P1JJ9Pn4M2tecrSqXfyoGRRQxnbFMo1foyWRF1e3AtJVHa968N8yyK5PqPiB7tPb8Vu9ksrzessP/kK5JsaSKeS1lKi8xlXRzfnSjo7hFFmKclUvOhA7pwrqe2sVhJLCVHm0dmtdq4E/6ES7EmJtk4MLSVQpXhtHfdK6p3HLpYSnUK0x7q3TrqL4t5S0qtTOordFyl6FkxoTJsQk9+73Qw5RK/EW7bPdbY3KVZnew+rsUnvozlR5dflmm+1yqiv58f//otsnvFasCn4i9c4pDLV9EHJJpMJUykm9bDt2QJ3eK+GUMfqmvhx2KfLHmxsypTVuGZeHDZGdiGAJ7tyjicM6hqqOXG9EUSRGNrO8N2zSpxkIqG1mhLoXEeEkDAPg5AAAuFj0GFcp2kcgDwLCWMAwkwaB8Wxq72G/OgIxYiTDEMKqICwTG/ViTiCGBNMxVVGOJJ3x44qfCQmJJL2+ckolRPAYAYxoVCoEe8BzUAGqJgRAlN5Y+RQiZwToWQC4pszISKDFAMM4eMPwJmQIV9ErEFSSYQujrTE4mtexKuqyWMucJY9RGSYCmsBRhkVcsTbOhFzIq0TV45aTMJJLsJlLzMQTiktQohwUEIgyWToMvGXiSMwizsfdwtBbpQYKvAZjw2u5aMQH5ne0H9U4n4Ztmg/CPHWUXpQflDitfe4bUoPcL8N3ROfKvHT2LJYT4SsvoWI8uxQSPeFxxnHTus1gg1HTuvbXTXpmxCPffId/E3J8R7IA82LEC/94D1x1fN82nbjJm5EWZ3zvvKUUVDMm7ZLZT2SX6pdJ6d6bJpJ2rUNd1U4bvDGfhzaW+1YKcxeoofGodMkjXnmxu7dMjdTb7uKcJJ+aualuzN9BjeO2sNGR7cWfbVNvnGVreuJqr5YO6PFgY54UHP+mkQjlVXS19K5V3Ycft995TOKpT/43FJ2h7ODoiTuZZF5fb/wd1T16ZMSfp7SJgDq3y6vS3r+TDo/bWVVd0B/u4RDwuppcZIkThZgVKSH/Z6/hKuw+fO5rlQAOcgqpQqS+laU/7bFjMripnrZqZPyOlp1pxwPyzzx5LUZIHbCUZTwaV4GnXnq1dUvL1A+2yueWGGW9jqOt9ttHK/tolajjTl3u/b0a9ud/9BCT1rXrl7KSGGCvFnumMLdHAACKb4vTS4M50OGBYqSnhdFLikK3ieuexSBQCAQCAQCgUAgEAgEAoH/BP8AW/owHacvk44AAAAASUVORK5CYII='></img>
              <p>{studentData?.address}</p>
            </div>
            <div className='photo3'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Kc_EKJczwlXGawYmnkOxM24VunhPuyNTmFnxvmAFeA&usqp=CAU&ec=48600113'></img>
              <p>{studentData?.phone}</p>
            </div>
            <h5>Contact Details:</h5>
            <div className='photo4'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Kc_EKJczwlXGawYmnkOxM24VunhPuyNTmFnxvmAFeA&usqp=CAU&ec=48600113'></img>
              <p>{studentData?.email}</p>
            </div>
            <div className='photo5'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Kc_EKJczwlXGawYmnkOxM24VunhPuyNTmFnxvmAFeA&usqp=CAU&ec=48600113'></img>
              <p>{studentData?.phone}</p>
            </div>
            <Link to={`/Pagebody3/${studentId}`}>
            <button>UPDATE</button>
        </Link>
        <Link to={'/Pagebody2'}><button onClick={handleRemove}>Delete</button></Link>
          </div>
          <div className='compo2_pagebody5'>
            <h4>STUDENT COURSE</h4>

            <table>
              <thead>
                <tr>
                <th>ID</th>
                  <th>Student</th>
                  <th>COURSE NAME</th>
                  <th>PROGRESS</th>
                  <th>UPDATE PROGRESS</th>
                  <th>ACTION</th>

                </tr>
              </thead>
              <tbody>
              {Array.isArray(tableData) && tableData.map((row) =>(
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.student_name}</td>
            <td>{row.course_name}</td>
            <td>{row.progress}</td>
            
             
               
           
                    <td><select className="Dropdown" name="courses" value={userstate?.progress}>
                        <option value="" disabled>Select Progress</option>
                        <option value="0-25%">0-25%</option>
                        <option value="25-50%">25-50%</option>
                        <option value="50-75%">50-75%</option>
                        <option value="75-100%">75-100%</option>
                      </select>
                    </td>
                    <td>
  <Link to="/Pagebody2">
    <button className="button1" onClick={() => handleDelete(row.id)}>
      Delete
    </button>
  </Link>
</td>

           
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

export default Pagebody5;
