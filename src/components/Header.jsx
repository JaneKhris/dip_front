import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Nav from './Nav'

function Header() {
  const navigate = useNavigate()
  const { setToken, setProfile, token } = useContext(AuthContext)


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
  }

  return (
    <header>
      <div>Header "{token}"</div>
      {token &&
        <button onClick={handleLogout}>Logout</button>}
      {!token && 
      <div>
            <button onClick={()=> {navigate('/register')}}>Регистрация</button>
            <button onClick={()=> {navigate('/login')}}>Войти</button>
      </div>
      }
    </header>
  )
}

export default Header