import {React,useState,useEffect} from 'react';
import Layout from '../Layout';
import './Pagebody11.css';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';



function Pagebodyfinal() {

  const [tableData, setTableData] = useState([ ]);
  const [category, setCategory] = useState({
    course_category_name: '',
    designation: ''
  });
  
  const params = useParams();
  const catId = params.id;
  console.log(catId);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/course/course_category/${catId}/`)
      .then(response => {
        setTableData(response?.data);
      })
      .catch(error => {
        console.error('Error fetching table data:', error);
      });
  }, [catId]);

  console.log(tableData);
  const handleUpdate = () => {
  const updatedData = {
    course_category_name: category.course_category_name,
    designation: category.designation
    
  };
  axios
  .put(`http://127.0.0.1:8000/course/course_category/${catId}/`, updatedData)
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
    <div className=' main_pagebody11'>
    <div className='pagebodyhead11'>
        <h4>UPDATE COURSE CATEGORY</h4>
        </div>
        <div className='compo1_pagebody11'>
         
          <form action=''>
            <label htmlfor="course_category_name">Course Category:</label>
            <input
                 type="text"
                defaultValue={tableData.course_category_name}
                onChange={(event) =>
               setCategory((prevState) => ({
              ...prevState,
              course_category_name: event.target.value
             }))
               }
              placeholder="Enter Category"
            />
            <label htmlfor="designation">Designation:</label>  
            <input
                 type="text"
                defaultValue={tableData.designation}
                onChange={(event) =>
               setCategory((prevState) => ({
              ...prevState,
              designation: event.target.value
             }))
               }
              placeholder="Enter Designation"
            />
        <Link to={'/Pagebody9'}><button onClick={handleUpdate}>Update</button></Link>
        <Link to={'/Pagebody1'}><button>Back</button></Link>
            </form>
            </div>
        </div>
        </Layout>
        </>
  )
}
export default Pagebodyfinal