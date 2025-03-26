import React, { useState } from 'react'
import "./accord.css"
const Accordion = ({title,content}) => {
    const [isActive , setIsActive] = useState(false)
  return (
    <section className='accordion-card' key={Date.now()}>
      <div className="header" onClick={()=> setIsActive(!isActive)}>
        <div>
            {title}
            <p className='icon'>  {isActive ? "-" : '+'} </p>
        </div>
      </div>
    </section>
  )
}

export default Accordion
