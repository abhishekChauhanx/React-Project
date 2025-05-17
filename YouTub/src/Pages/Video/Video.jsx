import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/Playvideo/PlayVideo'
import Recommended from '../../Components/Recommneded/Recommended'
import { useParams } from 'react-router'
const Video = () => {
        const{categoryId} = useParams()
  return (
    <div className='play-container'>


      <PlayVideo  />
      <Recommended categoryId = {categoryId}/>
    </div>
  )
}

export default Video
