import { useState } from "react"
import Feed from "../../Components/Feed/Feed"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { useIsSide } from "../../SideContext"
import "./Home.css"

const Home = () => {
  const { isSide } = useIsSide()
  const[category , setCategory] = useState(0)

  return (
    <>
      <Sidebar category = {category} setCategory={setCategory} />

      <div className={`container  ${isSide ? "" : 'large-container'}`}>
        <Feed category = {category}  />
      </div>
    </>
  )
}

export default Home
