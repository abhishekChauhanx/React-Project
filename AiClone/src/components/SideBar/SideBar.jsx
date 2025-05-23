import React, { useState } from 'react'
import "./SideBar.css"

import {assets} from "../../assets/assets"
const SideBar = () => {

    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" onClick={()=> setIsOpen(!isOpen)} />
        <div className="newChart">
            <img src={assets.plus_icon} alt="" />
            {isOpen  &&   <p>New Chat</p>}
        </div>
        {isOpen &&
         <div className="recent">
         <p className='recent-title'>Recent</p>
         <div className="recent-entry">
             <img src={assets.message_icon} alt="" />
             <p>What is React ?</p>
         </div>
     </div>
        }
       
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
          { isOpen &&   <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            { isOpen &&   <p>Activities</p>
}        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {isOpen &&   <p>Setting</p>}
        </div>
      </div>
    </div>
  )
}

export default SideBar
