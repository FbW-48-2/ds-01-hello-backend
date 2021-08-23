import './App.css';
import { useContext } from 'react'
import { AppContext } from './context/AppContext';


function App() {

  const { data } = useContext(AppContext)

  return (
    <div className="App">
      <h1>This is the fetched data from backend</h1>
      <div>
        {
          data.map((item, i) => {
            return <ul key={i} style={{ listStyle: "none", textAlign: "start" }}>
              <li>{i + 1}.- {item}</li>
            </ul>
          })
        }
      </div>
    </div>
  );
}

export default App;
