import React from 'react'
import "./Main.css"


import play from "../../play_icon.png"
import pause from "../../pause_icon.png"
import arrow from "../../arrow_btn.png"
const Main = ({setStatus , data , setDatacount ,status,dataCount}) => {
  return (
    <div className='main'>
      <div className="main-text">
        <p>{data.text1}</p>
        <p>{data.text2}</p>
      </div>
      <div className="main-explore">
        <p>See More</p>
        <img src={arrow} alt="" />
      </div>
      <div className="main-play">
        <ul className="main-dots">
          <li onClick={()=>setDatacount(0)} className={dataCount ===0 ? 'main-dot orange' : "main-dot"}></li>
          <li onClick={()=>setDatacount(1)} className={dataCount ===1 ? 'main-dot orange' : "main-dot"}></li>
          <li onClick={()=>setDatacount(2)} className={dataCount ===2 ? 'main-dot orange' : "main-dot"}></li>
        </ul>

        <div className="main-play">
          <img onClick={()=> setStatus(!status)} src={status ? pause : play } alt="" />
          <p>See the video</p>
        </div>
      </div>
      
    </div>
  )
}

export default Main
