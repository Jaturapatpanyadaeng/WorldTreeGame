import React from 'react'

function Mybutton() {

  function headleClick() {
    alert ("You clicked me!");
  }
  return (
    <button onClick={headleClick}>Mybutton</button>
  )
}

export default Mybutton