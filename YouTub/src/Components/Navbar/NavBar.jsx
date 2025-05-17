import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RiVideoUploadFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { RiNotification4Fill } from "react-icons/ri";
import { useIsSide } from "../../SideContext";
import { Link } from "react-router-dom";
const NavBar = () => {

    const { setIsSide } = useIsSide()
    return (
        <nav className="navbar">
            <div className="nav-left navbar">
                <GiHamburgerMenu className="menu-icon" onClick={() => setIsSide(prev => !prev)} />
                {/* <Link to="/"> */}
                <h1 className="nav-logo" >zokerAura</h1>
                {/* </Link> */}
            </div>
            <div className="nav-middle navbar" >
                <div className="search-box navbar">

                    <input type="text" placeholder="Search" />
                    <FaSearch className="nav-icon" />
                </div>
            </div>
            <div className="nav-right navbar">
                <RiVideoUploadFill className="right-icons" />
                <MdCategory className="right-icons" />
                <RiNotification4Fill className="right-icons" />
                <img src="https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89" alt="" className="right-icons user-icon" />
            </div>

        </nav>
    )
}

export default NavBar
