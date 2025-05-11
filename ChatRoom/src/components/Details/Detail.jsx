import { IoSettings } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { RiFolderSharedFill } from "react-icons/ri";
import { IoCloudDownload } from "react-icons/io5";

import "./Detail.css"
const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
        <h2>Abhishek Chauhan</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architect</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <IoSettings />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <FaHandsHelping />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
          </div>
          <div className="photos">
            <div className="photo-items">
              <div className="photodes">
                <img src="https://images.wallpaperscraft.com/image/single/butterfly_wings_transparent_1322213_1280x720.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>

              <IoCloudDownload />
            </div>
          </div>
          <div className="photos">
            <div className="photo-items">
              <div className="photodes">
                <img src="https://images.wallpaperscraft.com/image/single/butterfly_wings_transparent_1322213_1280x720.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>

              <IoCloudDownload />
            </div>
          </div>
          <div className="photos">
            <div className="photo-items">
              <div className="photodes">
                <img src="https://images.wallpaperscraft.com/image/single/butterfly_wings_transparent_1322213_1280x720.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>

              <IoCloudDownload />
            </div>
          </div>
          <div className="photos">
            <div className="photo-items">
              <div className="photodes">
                <img src="https://images.wallpaperscraft.com/image/single/butterfly_wings_transparent_1322213_1280x720.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>

              <IoCloudDownload />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <RiFolderSharedFill />

          </div>
        </div>
        <div className="btn-detail">

        <button className="block-user">Block User</button>
        <button className="logOut-user">Log Out</button>
        </div>
      </div>

    </div>
  )
}

export default Detail
