import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "React",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 class = 'text-center bg-green-300 text-black font-bold p-4 rounded-full'>Tailwind CSS Test</h1>
    <Card username="react code" btnText="Click me" />
    <Card username="react code" btnText="visit me" />
    </>
    
  );
  
}

export default App;
