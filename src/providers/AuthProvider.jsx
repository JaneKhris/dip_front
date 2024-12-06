import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function AuthProvider({children}) {
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [profile, setProfile] = useState({
        id: localStorage.getItem('user_id'),
        name: localStorage.getItem('user_name'),
        isStaff: localStorage.getItem('user_isstaff'),
    })

  return (
    <AuthContext.Provider value={{token, setToken, profile, setProfile}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider