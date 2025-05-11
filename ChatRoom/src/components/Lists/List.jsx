
import ChatList from "./chatlist/ChatList"
import "./List.css"
import UserInfo from "./userInfo/UserInfo"
const List = () => {
  return (
    <div className="list">
     <UserInfo/>
     <ChatList/>
    </div>
  )
}

export default List
