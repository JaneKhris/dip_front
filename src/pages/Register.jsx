import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Notification from './Notification'

function Register() {
  const navigate = useNavigate()

  const [errorTitle, setErrorTitle] = useState('')


  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('!')
    const formData = new FormData(evt.target)
    if (formData.get('password') == formData.get('password_copy')) {
      formData.delete('password_copy')
      formData.set('storage_path', 'storage_path');
      fetch(import.meta.env.VITE_PORT + '/register/', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(item => {
          console.log(item)
          if (item.id) {
            setErrorTitle(`user ${item.username} registered`)
          } else {
            console.log(Object.values(item)[0])
            setErrorTitle(Object.values(item)[0][0])
            console.log('errorTitle')
          }
        }
        )
    } else {
      setErrorTitle('No match')
    }
    navigate('/')

  }
  return (

    <>
      {errorTitle &&
        <Notification
          field={errorTitle}
          handleOk={() => setErrorTitle('')}
        />}
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='username' pattern='[a-zA-Z][a-zA-Z0-9]{3,19}' required />
        <input type="text" name='password' placeholder='password' pattern='^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}$' required />
        <input type="text" name='password_copy' placeholder='password_copy' pattern='^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}$' required />
        <input type="text" name='first_name' placeholder='first_name' required />
        <input type="text" name='last_name' placeholder='last_name' required />
        <input type="email" name='email' placeholder='email' required />
        <button type='submit'>submit</button>
      </form>
    </>)
}

export default Register