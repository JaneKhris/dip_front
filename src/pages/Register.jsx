import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import TooltipError from './TooltipError'

function Register() {
  const navigate = useNavigate()

  const [errorTitle, setErrorTitle] = useState('')


  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('!')


    // const errors = {
    //   username: {
    //     valueMissing: 'Представьтесь, пожалуйста!',
    //     patternMismatch: 'Н:(',

    //   },
    //   password: {
    //     valueMissing: 'Представьтесь, пожалуйста!',
    //     patternMismatch: 'Н:(',
    //   },
    //   password_copy: {
    //     valueMissing: 'Представьтесь, пожалуйста!',
    //     patternMismatch: 'Не :(',
    //   },
    //   first_name: {
    //     valueMissing: 'Представьтесь, пожалуйста!',
    //   },
    //   last_name: {
    //     valueMissing: 'Представьтесь, пожалуйста!',
    //   },
    //   email: {
    //     valueMissing: 'Нам потребуется электропочта...',
    //     typeMismatch: 'А это точно электропочта?',
    //   },
    // }

    // const elements = evt.target.elements;
    // const invalid = [...elements].some((el) => {
    //   return Object.keys(ValidityState.prototype).some((key) => {
    //     console.log(el)
    //     if (!el.name) return;
    //     if (key === 'valid') return;
    //     if (el.validity[key]) {
    //       el.setCustomValidity(errors[el.name][key])
    //       return true
    //     }
    //   })
    // })

    // if (!invalid) {
    //   console.log('!')
    //   evt.target.reportValidily()
    // }




    const formData = new FormData(evt.target)
    if (formData.get('password') == formData.get('password_copy')) {
      console.log('okok')
      formData.delete('password_copy')
      formData.set('storage_path', 'storage_path');
      fetch(import.meta.env.VITE_PORT + '/register/', {
        method: 'POST',
        body: formData
      })
        .then(response => 
          response.json()

          // if (!response.ok) {
          //   return response.json()
          // } else {
          //   // navigate('/')
          // }
        )
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
      console.log('Not match')
    }
    console.log(evt.target.elements)

  }
  return (

    <>
      {errorTitle &&
        <TooltipError
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