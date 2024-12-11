import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import TooltipError from './TooltipError'

function Login() {

    const navigate = useNavigate()
    const { setToken, setProfile } = useContext(AuthContext)

    const [errorUser, setErrorUser] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)





    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch(import.meta.env.VITE_PORT + '/auth/login/', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                console.log(response.status)
                if (response.status == '400') {
                    setErrorPassword(true)
                }
                if (response.status == '401') {
                    setErrorUser(true)
                }
                return response.json()
            })
            .then(item => {
                if (item.token) {
                    setToken(item.token)
                    setProfile({
                        id: item.user_id,
                        name: item.user_name,
                        isStaff: item.is_staff
                    })
                    localStorage.setItem('token', item.token)
                    localStorage.setItem('user_name', item.user_name)
                    localStorage.setItem('user_id', item.user_id)
                    localStorage.setItem('user_isstaff', item.is_staff)
                    navigate('/')

                }
            })
    }

    return (
        <>
            {errorUser &&
                <TooltipError
                    field={'user'}
                    handleOk={() => setErrorUser(false)} />}
            {errorPassword &&
                <TooltipError
                    field={'password'}
                    handleOk={() => setErrorPassword(false)} />}
            <div>Login</div>
            <form action="" method='post' onSubmit={handleLogin}>
                <input type="text" name='username' placeholder='username' />
                <input type="text" name='password' placeholder='password' />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login