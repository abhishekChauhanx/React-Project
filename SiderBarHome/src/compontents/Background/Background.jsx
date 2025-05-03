import React from 'react'
import "./Background.css"

import video1 from "../../Trailer1.mp4"
const Background = ({ status, dataCount }) => {


    if (status) {
        return (
            <video className='background' autoPlay loop muted >
                <source src={video1} type="video/mp4" />
            </video>
        )
    }

    else if (dataCount === 0) {
        return <img src="https://imgs.search.brave.com/CchcTMV32qGmfH5rB4DKBeAv0JKxjWziurVZPdP8fsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2hC/V3gzVXBVMkplMnpK/cXJITHlVUVcuanBn" className='background' alt="" />
    }
    else if (dataCount === 1) {
        return <img src="https://imgs.search.brave.com/d5x5UisLtPBZBYhNONOXvPk5AtAmCsXBOUE2SsUSj_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aGlnaC1yZXNvbHV0/aW9uLXNjcmVlbnNo/b3RzLWZyb20tZ3Rh/LXZpLXRyYWlsZXIt/djAtaDB1dHVtNXdx/ZTRjMS5wbmc_d2lk/dGg9Mzg0MCZmb3Jt/YXQ9cG5nJmF1dG89/d2VicCZzPTE5MzA3/YjAzMDY4OWMwMGM1/ZWY1YzdiN2YwYTMy/N2YzODc3MzE5Nzg" className='background' alt="" />
    }
    else if (dataCount === 2) {
        return <img src="https://imgs.search.brave.com/hwShsbhxv6kznUheB6a39Zv1enYeqIydpU0O54mynpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5wb2x5Z29u/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvMi8yMDI1/LzAyL2d0YS1vbmxp/bmUtY2hhc2UuanBn/P3F1YWxpdHk9OTAm/c3RyaXA9YWxsJmNy/b3A9OC4yMTI0OTM4/OTY0ODQ0LDAsODQu/Mzc1LDEwMCZ3PTI0/MDA" className='background' alt="" />
    }
   
}

export default Background
