import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [ modules, setModules ] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/json')
    .then(res => res.json())
    .then(modulesApi => {
      setModules( modulesApi )
    })

  }, []) // fetch data just on initial load

  return (
    <div className="App">
      <header className="App-header">
        { modules.map(module => (
          <div key={module} >{module}</div>
        )) }
      </header>
    </div>
  );
}

export default App;
