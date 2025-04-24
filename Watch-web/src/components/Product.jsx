import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const navi = useNavigate()
    const [products, setProducts] = useState(null)


    useEffect(() => {
        if (id) {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(res => {
                    setProducts(res.data)
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [id])
    if (!products) {
        return <h1>Loading .....</h1>
    }
    return (
        <div className='p-5 w-[60%]'>
            <button onClick={() => navi(-1)} className='mb-5 px-4 py-2 bg-amber-200'>Back </button>
            <img src={products.images[0]} alt={products.title} />
<h1 className='text-2xl mb-4 font-bold'>{products.title}</h1>
<p className='mb-4 text-gray-50 w-[70%]'>{products.description}</p>
        </div>
    )
}

export default Product
