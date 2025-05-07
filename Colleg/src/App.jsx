import './App.css'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import NavBar from './components/NavBar/NavBar'
import Program from './components/Programs/Program'
import Reviwes from './components/Reviews/Reviwes'
import Title from './components/Title/Title'

function App() {


  return (
    <>
      <NavBar />
      <Main />
      <div className="box">
        <Title titleName='Our Programs' desc="Here We Offers" />
        <Program />
        <About />
        <Title titleName='Gallery' desc="Campus Photos" />
        <Campus/>
        <Title titleName='Reviews' desc="Previous Student " />
        <Reviwes/>
        <Title titleName='Contact Us' desc="Get In Touch! " />
        <Contact/>
<Footer/>
      </div>
    </>
  )
}

export default App
