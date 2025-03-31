import React from 'react'
import "./slidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Color from "./Color/Color"
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Slidebar = ({handleRadioChange}) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>  <AiOutlineShoppingCart/>  </h1>
        </div>
        <Category handleRadioChange={handleRadioChange}/>
        <Price handleRadioChange={handleRadioChange}/>
        <Color handleRadioChange={handleRadioChange}/>
    </section>
    </>
  )
}

export default Slidebar
