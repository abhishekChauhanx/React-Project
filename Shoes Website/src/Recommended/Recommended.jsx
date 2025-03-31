import React from 'react'
import "./recommended.css"
import Buttons from '../Components/Buttons'
const Recommended = ({handleBtnChange}) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">

          <Buttons onClickHandler={handleBtnChange} value="" title="All Products" />
          <Buttons onClickHandler={handleBtnChange} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleBtnChange} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleBtnChange} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleBtnChange} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  )
}

export default Recommended
