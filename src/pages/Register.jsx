import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Register() {
  const navigate = useNavigate()


  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    formData.set('storage_path', 'storage_path');
    fetch(import.meta.env.VITE_PORT + '/register/', {
      method: 'POST',
      body: formData
    })
      .then(response => console.log(response))

    navigate('/')
  }
  return (

    <>REGISTER
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='username' />
        <input type="text" name='password' placeholder='password' />
        <input type="text" name='first_name' placeholder='first_name' />
        <input type="text" name='last_name' placeholder='last_name' />
        <input type="text" name='email' placeholder='email' />
        <button type='submit'>submit</button>
      </form>
    </>)
}

export default Register