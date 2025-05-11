import "./userInfo.css"
import { IoIosMore } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className="user">
        <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
        <h2>zoker</h2>
      </div>
      <div className="icon">
        <IoIosMore className="icons-userInfo"/>
        <FaVideo className="icons-userInfo"/>
        <FaEdit className="icons-userInfo"/>
      </div>
    </div>
  )
}

export default UserInfo
