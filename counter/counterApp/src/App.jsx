import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  
  

  const addValue=function(){
     console.log("clicked",counter); 
     if(counter<20){
      counter=counter+1;
      setCounter(counter)
    }  
   

  }

  const decvalue=function(){
  if(counter>0){
    counter=counter-1

    setCounter(counter)
  }
 

}

  return (
    <>
     
     <h1>Hey I am A devloper</h1>
     <h2>Counter value :{counter}</h2>
     <button onClick={addValue}>Add value</button>

     <button onClick={decvalue}>Decrease value </button>

     
    </>
  )
}

export default App