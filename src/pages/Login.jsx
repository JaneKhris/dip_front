import React from 'react'

function Login() {

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        fetch('http://localhost:8000/api/token/login/', {
            method: 'POST',
            // headers: {
            //     Authorization: 'Token 69ef9510931928aa89a1f9d211ee1fa27a299a6c'
            // },
            body: formData
          })
          .then(response => response.json())
          .then(item => {
            console.log(item)
            localStorage.setItem('token', item.auth_token)
        })
    }

    async function handleLogin(evetn) {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        let res = await fetch('http://localhost:8000/api/token/login/', {
            method: 'POST',
            body: formData
          })
        let token = await res.json().auth_token

        let userRes = await fetch(`http://localhost:8000/api/users/${formData.get('username')}`)
        let userIsStaff = await userRes.json.is_staff

        localStorage.setItem('token',token)
        localStorage.setItem('user_isstaff', userIsStaff)
        
    }

    return (
        <>
            <div>Login</div>
            <form action="" method='post' onSubmit={handleSubmit}>
                <input type="text" name='username'placeholder='username'/>
                <input type="text" name='password'placeholder='password'/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login