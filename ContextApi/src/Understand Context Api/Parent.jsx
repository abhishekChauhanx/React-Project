import React from 'react'
import UserContextProvider from "./Context/UserContextProvider"

import  Login from "./components/Login";
import  Profile from "./components/Profile";

const Parent = () => {
  return (
   <UserContextProvider>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default Parent
