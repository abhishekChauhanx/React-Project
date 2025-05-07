import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-scroll'
const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false)

  const [isMobile, setIsMobile] = useState(false)
  function toggleMenu() {
    setIsMobile(prev => !prev)
  }
  useEffect(() => {

    function Scrolled() {
      window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false)
    }
    window.addEventListener('scroll', Scrolled)

    return () => window.removeEventListener("scroll", Scrolled)
  }, [])
  return (
    <nav className={`box  ${isScroll && "dark-nav"}  `}>
      <h1 className='logo'>zoker university</h1>
      <ul className={isMobile ? "menu-phone" :""}>
        <li > <Link to='Main' smooth={true} offset={0} duration={500} >Home </Link>  </li>
        <li > <Link to='Programs' smooth={true} offset={-260} duration={500} >Program </Link>  </li>
        <li > <Link to='About' smooth={true} offset={-100} duration={500} >About </Link>  </li>
        <li > <Link to='Campus' smooth={true} offset={-220} duration={500} >Campus </Link>  </li>
        <li > <Link to='Reviews' smooth={true} offset={-260} duration={500} >Reviews </Link>  </li>
        <li > <Link to='Contact' smooth={true} offset={0} duration={500} ><button className='Btn'>Contact Us</button> </Link>   </li>
      </ul>
      <i className="menu-icons "  onClick={toggleMenu}> {isMobile ? "☰" : "✘"} </i>


    </nav>
  )
}

export default NavBar
