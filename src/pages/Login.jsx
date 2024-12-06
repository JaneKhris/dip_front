import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {

    const navigate = useNavigate()
    const {setToken, setProfile} = useContext(AuthContext)



    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch(import.meta.env.VITE_PORT + '/auth/login/', {
            method: 'POST',
            body: formData
        })
            .then(responce => responce.json())
            .then(item => {
                console.log(item)
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
            })
        navigate('/')
            
    }

    return (
        <>
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