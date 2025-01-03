import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Notification from './Notification'

function Login() {

    const navigate = useNavigate()
    const { setIsAuth, setProfile } = useContext(AuthContext)

    const [errorUser, setErrorUser] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)



    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch(import.meta.env.VITE_PORT + '/auth/login/', {
            credentials: 'include',
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.status == '400') {
                    setErrorPassword(true)
                }
                if (response.status == '401') {
                    setErrorUser(true)
                }
                return response.json()
            })
            .then(item => {
                if (item.user_id) {
                    setIsAuth(true)
                    setProfile({
                        id: item.user_id,
                        name: item.user_name,
                        isStaff: item.is_staff
                    })
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('user_name', item.user_name)
                    localStorage.setItem('user_id', item.user_id)
                    localStorage.setItem('user_isstaff', item.is_staff)
                    navigate('/files/')

                }
            })
    }

    return (
        <>
            {errorUser &&
                <Notification
                    field={'user does not exist'}
                    handleOk={() => setErrorUser(false)} />}
            {errorPassword &&
                <Notification
                    field={'the password is incorrect'}
                    handleOk={() => setErrorPassword(false)} />}
            <div>Login</div>
            <form onSubmit={handleLogin}>
                <input type="text" name='username' placeholder='username' />
                <input type="text" name='password' placeholder='password' />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login