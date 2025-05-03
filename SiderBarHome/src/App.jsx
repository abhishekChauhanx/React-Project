import React, { useEffect, useState } from 'react'
import "./App.css"
import Background from './compontents/Background/Background'
import Nav from './compontents/NavBar/Nav'

import Main from "./compontents/Main/Main"
const App = () => {

  let Data = [
    {text1:"Are you Vice City? " , text2:"‘Cause I’m lost in your vibe."},
    {text1:"Is your name Lucia?" , text2:" Because you just hijacked my attention."},
    {text1:"You're the main mission" , text2:"in my open world."},
  ]

  const [dataCount , setDatacount] = useState(0)
  const [status,setStatus] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setDatacount(count=>  count===2 ? 0 :count+1  )
    },3000)
  })
  return (
    <div>
      <Background  status={status} dataCount={dataCount}   />
      <Nav/>
      <Main setStatus={setStatus} 
      data = {Data[dataCount]}
      setDatacount={setDatacount}
      status={status}
      dataCount={dataCount}
          />
    </div>
  )
}

export default App
