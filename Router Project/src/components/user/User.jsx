import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    const {userid} = useParams()
  return (
    <>
      User:{userid}
    </>
  )
}

export default User
