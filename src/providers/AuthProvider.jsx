import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') == 'true' ? true : false)
    const [profile, setProfile] = useState({
        id: localStorage.getItem('user_id'),
        name: localStorage.getItem('user_name'),
        isStaff: localStorage.getItem('is_staff') == 'true' ? true : false,
    })

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, profile, setProfile}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider