import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'


function Profile() {

  const { isAuth, profile } = useContext(AuthContext)

  return (
  
    <div className='profile'>Profile
    <div> {isAuth && <span>isAuth</span>}</div>
    <div> {profile.isStaff && <span>isStaff</span>}</div>
    </div>
  )
}

export default Profile