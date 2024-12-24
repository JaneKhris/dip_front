import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {isAuth, profile} = useContext(AuthContext)
  

  const navigate = useNavigate()

  useEffect(()=> {
    if (isAuth) {
      navigate('/files/')
    }
  })





  return (
    <div> 
    You need to login or register
    </div>
  )
}

export default Home