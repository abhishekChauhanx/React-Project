
import { useEffect, useState } from "react"
import "./Recommended.css"
import { API_KEY } from "../../data"
import { Link } from "react-router-dom"
const Recommended = ({ categoryId }) => {

    const [recommVideo, setRecommVideo] = useState([])


    useEffect(() => {
        async function rekatedVadio() {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

            await fetch(url)
                .then(res => res.json())
                .then(data => setRecommVideo(data.items || []))
                .catch(err => console.error("Failed to fetch recommended videos", err));
        }
        rekatedVadio();
    }, [categoryId]);
    const valueCoonverter = (value) => {
        if (value >= 100000) return Math.floor(value / 100000) + "M";
        else if (value >= 1000) return Math.floor(value / 1000) + "K";
        else return value
    }
    return (
        <div className='recommended'>
            {recommVideo.map((item, index) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video" key={index} >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{valueCoonverter(item.statistics.viewCount)}</p>
                    </div>
                </Link>
            ))}




        </div>
    )
}

export default Recommended
