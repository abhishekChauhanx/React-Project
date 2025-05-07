import React, { useRef, useState } from 'react'
import "./Reviews.css"
const Reviwes = () => {
    const sliderRef = useRef()
    const [tx, setTx] = useState(0)

    function sliderPlus() {
        if (tx > -50) {
            const newTx = tx - 20
            setTx(newTx)
            sliderRef.current.style.transform = `translateX(${newTx}%)`
        }

    }
    function sliderMinus() {
        if (tx < 0) {
            const newTx = tx + 20
            setTx(newTx)
            sliderRef.current.style.transform = `translateX(${newTx}%)`
        }

    }
    return (
        <div className='reviews' id='Reviews'>
            <p className='next-icons' onClick={sliderPlus} >→</p>
            <p className='back-icons' onClick={sliderMinus} > ←</p>
            <div className="slider">
                <ul ref={sliderRef}>

                    {[...Array(5)].map((_, i) => (
                        <li>
                            <div className="slide">
                                <div className="user-info">

                                    <img src="https://imgs.search.brave.com/c-ZkmWHi90ABMwIgXuOM9t7PIR6CWntGKT6GhpwE32A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1Lzc3LzI3/LzM2MF9GXzY1Nzcy/NzE5X0ExVVY1a0xp/NW5DRVdJMEJOTExp/RmFCUEVrVWJ2NUZ2/LmpwZw" alt="" />
                                    <div>
                                        <h3>Unknow {i + 1}</h3>
                                        <span>Company's Name , Country </span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus velit vitae asperiores iusto. Ipsam ratione debitis quisquam dolorem sapiente reprehenderit similique sunt voluptatem ea quas? Explicabo, cumque aliquam vero odit ut aut at pariatur debitis quidem reiciendis eius eligendi necessitatibus blanditiis maxime optio atque. Corporis quae praesentium sunt ducimus veniam. Fugiat aut beatae suscipit architecto nobis, tempore odit eos cupiditate!</p>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Reviwes
