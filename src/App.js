import './App.css';
import Name from './pages/Name';
import Todo from './pages/Todo'
import { useState } from 'react';

function App () {
  
  const [name, setName] = useState('')
  return (
  <>
    <Name name={name} setName={setName}/>
    <Todo name={name}/> 
  </>
  );
}

export default App;
