import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        
      <div className="nav">
        <p>Ai Agent</p>
        <img src='https://images.wallpaperscraft.com/image/single/girl_jewelry_umbrella_1050493_1280x720.jpg' alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p> <span>Hello , Dev .</span> </p>
            <p>
            どんな御用でしょうか？
            </p>
        </div>
        <div className="cards">
            <div className="card">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse nesciunt debitis!   </p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse nesciunt debitis!   </p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse nesciunt debitis!   </p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse nesciunt debitis!   </p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a promot here' />
                <div>

                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
                
            </div>
            <p className="bottom-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione debitis aliquam.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
