import React ,{useState} from 'react'
import './App.css';
import {Message} from './Message.js'

function App() {
  let [count,setCount] = useState(1)
  let [isMorning,setMorning]= useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight':''}`}>
      
      <Message counter={count}/>
      <h1>Daytime= {isMorning ? 'Morning' : 'Night' }</h1>
     
      <br/>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update dayLight</button>
    </div>
  );
}
  
export default App;
