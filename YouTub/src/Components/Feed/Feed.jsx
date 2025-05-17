import { Link } from "react-router-dom"
import "./Feed.css"
import { API_KEY } from "../../data"
import { useEffect, useState } from "react"
import moment from "moment"

const Feed = ({ category }) => {

    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
            await fetch(url).then(res => res.json()).then(data => setData(data.items))
        }

        fetchData()
    }, [category])

    console.log(data)
    const valueCoonverter = (value)=>{
        if(value>=100000) return Math.floor(value/100000) +"M";
        else if(value>=1000) return Math.floor(value/1000) +"K";
        else return value
    }
    return (

        <div className="feed">

            {data.map((item, index) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{  valueCoonverter(  item.statistics.viewCount)} views  &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}







        </div>
    )
}

export default Feed
