// import React,{useState} from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//     const options1 = [
//         // {value:'Students',link:'/Pagebody5'}, 
//         {value : 'All students',link:'/Pagebody2' },
        
//         { value: 'Create students',link:'/Pagebody4' }
//       ];
//       const options2 = [
//         { value: 'All courses', link: '/Pagebody6' },
       
//         { value: 'Create courses',link: '/Pagebody7' }
//       ];
//       const options3 = [
//         { value: 'All courses category',link: '/Pagebody9' },
      
//         { value: 'Create courses category' ,link: '/Pagebodyfinal'}
//       ];
//     const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div className="sidebar">
//       <h3>EDISONVALLEY</h3>
//         <h5>Menu</h5>
//       <div className="sidebar-menu">
//         <div className='dashboard'>
//         <img src='https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg'></img>
//         <strong>Dashboard</strong>
//         </div>
       
//        <div className="dropdown dropdown1">
//        <img src='https://thumbs.dreamstime.com/b/business-man-icon-illustration-business-man-icon-white-background-107722188.jpg'></img>
//       <select value={selectedOption} onChange={handleOptionChange}>
//      <option value="">Students</option>
//         {options1.map(option => (
//           <option key={option.id} value={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//       </div>
//       <div className="dropdown dropdown2">
//        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaK4CdXqRrT1NvcGOdWF3c9bSUxZ4WmDaJx_aDcDAWvQ&usqp=CAU&ec=48600113'></img>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Courses</option>
//         {options2.map(option => (
//           <option key={option.id} value={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//       </div>
//       <div className="dropdown dropdown3">
//        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuF6k0fYOlPvZk-79K6TEbvMibn8IOAJe9SZA559SlA&usqp=CAU&ec=48600113'></img>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Courses category</option>
//         {options3.map(option => (
//           <option key={option.id} value={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//       </div>
//       {/* {selectedOption === 'Students' && (
//         <Link to="/Pagebody5">Go to  Students  search page</Link>
//         )}  */}
//       {selectedOption === 'All students' && (
//         <Link to="/Pagebody2">Go to All Students page</Link>
//         )} 
      
//       {selectedOption === 'Create students' && (
//         <Link to="/Pagebody4">Create Students page</Link>
//         )} 
//      {selectedOption === 'All courses' && (
//           <Link to="/Pagebody6">Go to All Courses page</Link>
//         )}
//      {selectedOption === 'Create courses' && (
//           <Link to="/Pagebody7">Create Courses page</Link>
//         )}
    
       
//      {selectedOption === 'All courses category' && (
//           <Link to="/Pagebody9">All Courses category page</Link>
//         )}
//      {selectedOption === 'Create courses category' && (
//           <Link to="/Pagebody10">Create Courses category page</Link>
//         )}
     
//     </div>
        
//     </div>
    
//   );
// }

// export default Sidebar;
import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const options1 = [
    { value: 'All students', link: '/Pagebody2' },
    { value: 'Create students', link: '/Pagebody4' }
  ];
  const options2 = [
    { value: 'All courses', link: '/Pagebody6' },
    { value: 'Create courses', link: '/Pagebody7' }
  ];
  const options3 = [
    { value: 'All courses category', link: '/Pagebody9' },
    { value: 'Create courses category', link: '/Pagebodyfinal' }
  ];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="sidebar">
      <h3>EDISONVALLEY</h3>
      <h5>Menu</h5>
      <div className="sidebar-menu">
        <div className="dashboard">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg" alt="dashboard-icon" />
          <strong>Dashboard</strong>
        </div>

        <div className="dropdown dropdown1">
          <img src="https://thumbs.dreamstime.com/b/business-man-icon-illustration-business-man-icon-white-background-107722188.jpg" alt="students-icon" />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Students</option>
            {options1.map((option, index) => (
              <option key={index} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown dropdown2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaK4CdXqRrT1NvcGOdWF3c9bSUxZ4WmDaJx_aDcDAWvQ&usqp=CAU&ec=48600113" alt="courses-icon" />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Courses</option>
            {options2.map((option, index) => (
              <option key={index} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown dropdown3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuF6k0fYOlPvZk-79K6TEbvMibn8IOAJe9SZA559SlA&usqp=CAU&ec=48600113" alt="category-icon" />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Courses category</option>
            {options3.map((option, index) => (
              <option key={index} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>

        {selectedOption === 'All students' && (
          <Link to="/Pagebody2">Go to All Students page</Link>
        )}

        {selectedOption === 'Create students' && (
          <Link to="/Pagebody4">Create Students page</Link>
        )}

        {selectedOption === 'All courses' && (
          <Link to="/Pagebody6">Go to All Courses page</Link>
        )}

        {selectedOption === 'Create courses' && (
          <Link to="/Pagebody7">Create Courses page</Link>
        )}

        {selectedOption === 'All courses category' && (
          <Link to="/Pagebody9">All Courses category page</Link>
        )}

        {selectedOption === 'Create courses category' && (
          <Link to="/Pagebody10">Create Courses category page</Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
