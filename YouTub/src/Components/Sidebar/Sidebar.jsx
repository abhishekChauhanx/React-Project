import "./Sidebar.css"
import { FaHome } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import { FaMusic } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { useIsSide } from "../../SideContext";
const Sidebar = ({ category, setCategory }) => {
    const { isSide } = useIsSide()
    console.log(category)
    return (
        <div className={`sidebar ${isSide ? "" : "small-sidebar"}`}>
            <div className="short-cutLink">
                <div className={`sideLink  ${category === 0 ? "active" : ""}  `} onClick={() => setCategory(0)}>
                    <FaHome /> <p>Home</p>
                </div>
                <div className={`sideLink  ${category === 20 ? "active" : ""}  `} onClick={() => setCategory(20)}>
                    <SiYoutubegaming />  <p>Gaming</p>
                </div>
                <div className={`sideLink  ${category === 2 ? "active" : ""}  `} onClick={() => setCategory(2)}>
                    <FaCar /> <p>Automobile</p>
                </div>
                <div className={`sideLink  ${category === 17 ? "active" : ""}  `} onClick={() => setCategory(17)}>
                    <MdOutlineSportsSoccer /> <p>Sports</p>
                </div>
                <div className={`sideLink  ${category === 24 ? "active" : ""}  `} onClick={() => setCategory(24)}>
                    <SiDcentertainment /> <p>Entertainment</p>
                </div>
                <div className={`sideLink  ${category === 28 ? "active" : ""}  `} onClick={() => setCategory(28)}>
                    <GiTechnoHeart /> <p>Technology</p>
                </div>
                <div className={`sideLink  ${category === 10 ? "active" : ""}  `} onClick={() => setCategory(10)}>
                    <FaMusic /> <p>Music</p>
                </div>
                <div className={`sideLink  ${category === 22 ? "active" : ""}  `} onClick={() => setCategory(22)}>
                    <FaBlog /> <p>Blogs</p>
                </div>
                <div className={`sideLink  ${category === 25 ? "active" : ""}  `} onClick={() => setCategory(25)}>
                    <FaNewspaper />  <p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribe-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
                    <p>ABC </p>
                </div>
                <div className="side-link">
                    <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
                    <p>ABC </p>
                </div>
                <div className="side-link">
                    <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
                    <p>ABC </p>
                </div>
                <div className="side-link">
                    <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
                    <p>ABC </p>
                </div>
                <div className="side-link">
                    <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
                    <p>ABC </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
