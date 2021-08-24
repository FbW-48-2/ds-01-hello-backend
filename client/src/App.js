import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [ modules, setModules ] = useState([])

  // ON LOAD => FETCH DATA FROM API
  useEffect(() => {

    fetch('http://localhost:5000/json')
    .then(res => res.json()) // => res.json() EXPECTS JSON data to get from API!
    .then(modulesApi => {
      setModules( modulesApi )
    })

  }, []) // fetch data just on initial load


  const jsxModules = modules.map(module => (
    <div key={module} >{module}</div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Modules</h1>
        { jsxModules }
      </header>
    </div>
  );
}

export default App;
