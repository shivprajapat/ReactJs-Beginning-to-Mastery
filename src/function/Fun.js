import React from 'react'
import Parent from './Parent';

const Fun = () => {
  function clickMe() {
    alert('event clicked');
  }
  return (
    <div>
      <h2>Function Components</h2>
      <button onClick={clickMe}>click me</button>
      <Parent/>
    </div>
  )
}

export default Fun