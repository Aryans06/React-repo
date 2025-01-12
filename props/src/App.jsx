import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
let myObj={
  name:"Aryan",
  age:20
}
  return (
   <>
    <h1 className='text-blue-700 bg-red-400 font-bold rounded-lg'>Hey Its me</h1>
    <Card username="Aryan" someobj={myObj} btnText="Click Me" />
    <Card username="Vicky" btnText="Visit me"/>
   </>
  )
}

export default App
