import React from 'react'
import "./Title.css"
const Title = ({titleName ,desc}) => {
    return (

            <div className="title">
                <p>{titleName}</p>
                <h2>{desc}</h2>
            </div>

    )
}

export default Title
