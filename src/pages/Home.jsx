import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {token, profile} = useContext(AuthContext)

  const navigate = useNavigate()



  return (
    <> 
    {!token && 
      <div>HI!

    </div>}
    {token && 
    <div>Hello,{profile.name}
    </div>
    }
  
    </>
  )
}

export default Home