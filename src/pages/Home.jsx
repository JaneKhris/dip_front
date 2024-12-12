import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {token, profile} = useContext(AuthContext)
  

  const navigate = useNavigate()

  useEffect(()=> {
    if (token) {
      navigate('/files/')
    }
  })





  return (
    <> 
    You need to login or register
    {/* {!token && 
      <div>HI!

    </div>}
    {token && 
    <div>Hello,{profile.name}
    </div>
    } */}
  
    </>
  )
}

export default Home