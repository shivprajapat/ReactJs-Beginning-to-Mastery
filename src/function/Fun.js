import React from 'react'

const Fun = () => {
   function clickMe(){
        alert('event clicked');
      }
        return (
    <div>
        <button onClick={clickMe}>click me</button>
    </div>
  )
}

export default Fun