import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { logout } from '../utils/utils'

function Header() {
  const navigate = useNavigate()
  const { isAuth, setIsAuth, profile, setProfile } = useContext(AuthContext)



  const handleLogout = () => {
    fetch(import.meta.env.VITE_PORT + '/auth/logout/', {
      credentials: 'include',
    })


    .then((res) => {
      console.log(res)
      if (res.statusText == 'OK') {
        logout(setIsAuth,setProfile, navigate)
        // localStorage.removeItem('isAuth')
        // localStorage.removeItem('user_name')
        // localStorage.removeItem('user_isstaff')
        // localStorage.removeItem('user_id')
        // setIsAuth(false)
        // setProfile({
        //   id: '',
        //   name: '',
        //   isStaff: false
        // })
        // navigate('/')
      }
    })
    .catch(err => console.error(err));

  }

  return (
    <header className='header'>
      <h3 className='header-title'>MyFiles</h3>
      {isAuth &&
      <div className='header-profile'>
            <div className='app-title'>{profile.name}</div>

        <button className='btn-logout' onClick={handleLogout}>Logout</button>
        </div>}
    </header>
  )
}

export default Header