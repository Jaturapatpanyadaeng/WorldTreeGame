import React from 'react'

function Myprofile({data}) {
  return (
    <div>
        <p>I'm from Myprofile compone</p>
        <p>My name is {data.firstName} {data.lastName}</p>
    </div>
  )
}

export default Myprofile