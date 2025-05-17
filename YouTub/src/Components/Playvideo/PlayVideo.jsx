import "./PlayVideo.css"
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaRegShareSquare } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";
import moment from "moment";
import { useParams } from "react-router";
const PlayVideo = () => {

    const [apidata, setApidata] = useState(null)
    const { videoId } = useParams()
    useEffect(() => {
        const fetchVideoData = async () => {
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

            await fetch(url).then(res => res.json()).then(data => setApidata(data.items[0]))
        }
        fetchVideoData()
    }, [videoId])
    const valueCoonverter = (value) => {
        if (value >= 100000) return Math.floor(value / 100000) + "M";
        else if (value >= 1000) return Math.floor(value / 1000) + "K";
        else return value
    }
    return (
        <div className="play-video">
            {/* <video src="" controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            {
                apidata ? (
                    <>
                        <h3>{apidata.snippet.title}</h3>
                        <div className="play-video-info">
                            <p>    {valueCoonverter(apidata.statistics.viewCount)} &bull; {moment(apidata.snippet.publishedAt).fromNow()}</p>

                            <div>
                                <span>
                                    <FcLike />{valueCoonverter(apidata.statistics.likeCount)}
                                </span>
                                <span>
                                    <FcDislike />
                                </span>
                                <span>
                                    <FaRegShareSquare />
                                </span>
                                <span>
                                    <BsSave />
                                </span>

                            </div>
                        </div>
                        <hr />
                        <div className="publisher">
                            <img src="" alt="" />
                            <div>
                                <p> {apidata.snippet.channelTitle}</p>
                                <span>2B+ Subscriber</span>
                            </div>
                            <button>Subscribe</button>
                        </div>

                        <div className="desc">
                            <p>{apidata.snippet.description.slice(0, 250)}</p>

                            <hr />
                            <h4>
                                {valueCoonverter(apidata.statistics.commentCount)} Comments
                            </h4>




                        </div>

                    </>
                ) : (<p>Loading</p>)
            }



        </div>
    )
}

export default PlayVideo
