
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import NavBar from './Components/Navbar/NavBar'

import { SideProvider } from './SideContext'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {

        path: "/video/:categoryId/:videoId",
        element: <Video />
      }
    ]
  )


  return (
    <>

      <NavBar />
      <RouterProvider router={router} />
    </>


  )
}

export default App
