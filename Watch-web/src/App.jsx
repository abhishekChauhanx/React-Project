import React from 'react'
import "./App.css"
import Sidebar from './components/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainContent from './components/MainContent'
import Product from './components/Product'

const App = () => {
  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='rounded w-full flex justify-between flex-wrap'>
          <Routes>
       
              <Route path='/' element={<MainContent />} />
              <Route path='/product/:id' element={<Product/>}  />
            </Routes>

        </div>
      </div>
    </Router>
  )
}

export default App
