import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './components/Mybutton'
import  Myprofile from './components/Myprofile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("jaturapat")
  const [Iftrue, setIfTrue] = useState(false)

  const user = {
    firstName: "josh",
    lastName:"dsdas"
  }
  const Products = [
    { title: 'Cabbage' , id:1},
    {title: 'Garlic' , id:2},
    {title: 'Apple' , id:3}
  ]

  function headlecreateClick(){
    setCount(count + 1)
  }
  function headleDecreaseClick(){
    setCount(count - 1)
  }
  return (
    <>
        <h1>Welcome to My App</h1>
        <Myprofile data={user}/>
        <p>{count}</p>
        <button onClick={headlecreateClick}>Incrare</button>
        <button onClick={headleDecreaseClick}>Incrare</button>
        <Mybutton />
        {Iftrue ? "Yes, it's true" : "No, it's false "}
        <ul>
          {Products.map(item =>(
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </>
  )
}

export default App
