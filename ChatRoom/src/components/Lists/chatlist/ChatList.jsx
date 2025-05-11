import { useState } from "react";
import "./chatlist.css"
import { FaSearch } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { TiUserDelete } from "react-icons/ti";
import AddUser from "./addUser/AddUser";
const ChatList = () => {
    const [isAddUser, setIsAddUser] = useState(false)

    function handleAdd() {
        setIsAddUser(prev => !prev)
    }
    const Icons = isAddUser ?   TiUserDelete:TiUserAdd;
    return (
        <div className="chatlist">
            <div className="search">
                <div className="search-bar">
                    <FaSearch />
                    <input className="chat-list-input" type="text" placeholder="Search" />
                </div>
                <Icons onClick={handleAdd} className="chatlist-add" />


            </div>

            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="chat-item">
                <img src="https://imgs.search.brave.com/k_0L-TWQJQnLSpwz6eY-cMJ5Mtv1vJvH7gY2fHC56vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2L2U0/L2RmL2U2ZTRkZjI2/YmE3NTIxNjFiOWZj/NmExNzMyMWZhMjg2/LmpwZw" alt="" />
                <div className="texts">
                    <span>Abhishek Chauhan</span>
                    <p>hello</p>
                </div>
            </div>
          {isAddUser ? <AddUser /> :"" } 
        </div>
    )
}

export default ChatList
