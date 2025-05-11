import "./Chat.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";

import { FaRegImage } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa6";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoIosRemoveCircle } from "react-icons/io";

import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
const Chats = () => {
  const [isEmojiOpen, setEmojiOpen] = useState(false)
  const [inputText, setInputText] = useState("")
  const endRef = useRef(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  function hanldeEmoji(e) {
    console.log(e)

    const { emoji } = e
    setInputText(prev => prev + emoji)
  }
  function hanldeEmojiOpen() {
    setEmojiOpen(prev => !prev)
  }

  function hanldeRemoveOne() {
    setInputText(prev => prev.slice(0, -1))
  }

  console.log(inputText)
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">
            <span>Abhishek Chauhan</span>
            <p>last seen today at 11:23 </p>
          </div>
        </div>
        <div className="icons">
          <FaPhoneAlt className="chat-icons" />
          <IoVideocam className="chat-icons" />
          <FaInfoCircle className="chat-icons" />
        </div>

      </div>
      <div className="center">
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">
            <img src="https://images.wallpaperscraft.com/image/single/crow_wings_bird_swing_85055_1280x720.jpg" alt="" className="send-img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
          <div className="texts">

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum excepturi mollitia dicta nostrum, eius adipisci tenetur vero ipsam iusto?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <FaRegImage className="chat-icons" />
          <FaCameraRetro className="chat-icons" />
          <FaMicrophoneLines className="chat-icons" />
        </div>
        <input type="text" placeholder="Type a message..." value={inputText} onChange={(e) => setInputText(e.target.value)} /><IoIosRemoveCircle className="chat-icons" onClick={hanldeRemoveOne} />
        <div className="emoji">

          <MdOutlineEmojiEmotions className="chat-icons" onClick={hanldeEmojiOpen} />
          <div className="picker">

            {isEmojiOpen ? <EmojiPicker onEmojiClick={hanldeEmoji} /> : ""}
          </div>

        </div>
        <button className="btn-sendMess">Send</button>
      </div>

    </div>
  )
}

export default Chats
