import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Nav from './Nav'

function Header() {
  const navigate = useNavigate()
  const { setToken, setProfile, token ,profile} = useContext(AuthContext)


  const handleLogout = () => {
    fetch('http://localhost:8000/api/auth/logout/', {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    localStorage.removeItem('token')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_isstaff')
    localStorage.removeItem('user_id')
    setToken('')
    setProfile({
      id: '',
      name: '',
      isStaff: false
    })
    navigate('/')
  }

  return (
    <header className='header'>
      <h3 className='header-title'>MyFiles</h3>
      {token &&
      <div className='header-profile'>
            <div className='app-title'>{profile.name}</div>

        <button className='btn-logout' onClick={handleLogout}>Logout</button>
        </div>}
    </header>
  )
}

export default Header