import { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  
  const [courses, setCourses] = useState([])
  const serverUrl ='http://localhost:5000/react'

  const getData = async () => {
          try{
              const res = await fetch(`${serverUrl}`)
              const data = await res.json()
             return data
          }
          catch(error){
              return error
          }
  }


  useEffect(() => {
      const setData = async() => {
        const dataFetch = await getData()
        setCourses(dataFetch)
      }
      setData()
  },[])

  console.log(courses.length)
  return (
    <div className="App">
      <div className='courses'>
        <h3>Our DCI course</h3>
          <ul>
            {courses.map(el => <li>{el}</li>)}
          </ul>
       </div>
    </div>
  );
}

export default App;
