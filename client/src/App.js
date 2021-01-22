import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import One from './views/One';
import { useState } from 'react'


function App() {
  const [name, setname] = useState('')
  const [user, setUser] = useState(null)
  return (
    <>
    <div className="container">
      <h1 style={{color:'white', backgroundColor:'brown', margin:0}}>
        {name}</h1>
      <Router>
        <Main setname={setname} user={user} path="/pirates"/>
        <New setname={setname} user={user} path="/pirate/new"/>
        <One setname={setname} user={user} path="/pirate/:id" />
      </Router>
      </div>
    </>
  );
}

export default App;
