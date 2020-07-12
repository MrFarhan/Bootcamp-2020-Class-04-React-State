import React, { useState } from 'react';
import './App.css'

function Room() {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(72);
  // const brightness = 
  return (

    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      <div >the room is {isLit ? 'lit' : 'dark'}</div>
      <div >The Room Temperature is {temp}</div>
      <br />
      <button onClick={() => setLit(true)}>Turn Light On</button>
      <button onClick={() => setLit(false)}>Turn Light Off</button>
      <br />
      <br />
      <button onClick={() => setTemp(temp+1)}>Increase Room Temperature</button>
      <button onClick={() => setTemp(temp-1)}>Decrease Room Temperature</button>
    </div>
  );
}
export default Room;