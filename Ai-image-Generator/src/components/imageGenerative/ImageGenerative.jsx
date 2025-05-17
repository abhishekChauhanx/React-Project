import React, { useRef, useState } from 'react'
import "./imageGenerative.css"

const ImageGenerative = () => {
    const [imgUrl, setImgUrl] = useState("/")
    const inputRef= useRef(null)
    async function handleGenerat() {
        if (inputRef.current.value === "") return;
    
        try {
            const res = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer YOUR_BACKEND_PROXY_OR_SAFE_TOKEN",
                },
                body: JSON.stringify({
                    prompt: inputRef.current.value,
                    n: 1,
                    size: "512x512"
                })
            });
    
            const data = await res.json();
            if (data && data.data?.[0]?.url) {
                setImgUrl(data.data[0].url);
            } else {
                console.error("No image generated.");
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
    }
    
  return (
    <div className='container'>
        <div className='header'>Ai Image <span>  Generator </span>  </div>
        <div className="img-loader">
            <div className="img">
                <img src={imgUrl=== "/"?"https://images.wallpaperscraft.com/image/single/cube_dark_texture_119956_1920x1080.jpg":imgUrl}  alt="" />
            </div>
        </div>
      
      <div className="input-box">
        <input type="text" className='input-value' placeholder='Prompt For Your Image' ref={inputRef} />
        <div className="btn" onClick={()=>{handleGenerat()}}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerative
