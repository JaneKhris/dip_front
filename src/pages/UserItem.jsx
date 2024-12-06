import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function UserItem(props) {

    const { token } = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const [size, setSize] = useState('')
    const navigate = useNavigate()



    useEffect(() => {
        fetch(import.meta.env.VITE_PORT + `/files/?owner=${props.user.id}`, {
            method: 'GET',
            headers: {
                Authorization: `Token ${token}`
            },
        })
            .then((response) => response.json())
            .then(item => {
                let common = ''
                item.forEach((file) => {
                    common += file.size
                })
                setFiles(item)
                setSize(common)
            })
    }
        , [])


    const handleUserDelete = (evt) => {
        fetch(import.meta.env.VITE_PORT + `/users/${props.user.id}/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${token}`
            },
        })
            .then(response => console.log(response))
        evt.target.closest('.user-container').remove()


        navigate('/users')
    }

    const handleUserStaffChange = (evt) => {
        fetch(import.meta.env.VITE_PORT + `/users/${props.user.id}/`, {
            method: 'PATCH',
            headers: {
                Authorization: `Token ${token}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "is_staff": evt.target.checked
            }),
        })
            .then(response => console.log(response))
    }


    return (
        <div className='user-container'>
            <span className='user-username'>Username: {props.user.username}</span>
            <span className='user-firstname'>First Name: {props.user.first_name}</span>
            <span className='user-lastname'>Last Name: {props.user.last_name}</span>
            <span className='user-email'>email: {props.user.email}</span>
            /
            <label htmlFor="name">Is Staff:</label>

            <input
                onChange={handleUserStaffChange}
                type="checkbox"
                id="name"
                name="name"
                defaultChecked={props.user.is_staff}
            />

            <button onClick={handleUserDelete}>Delete</button>
            <div>Count:{files.length}</div>
            <div>Size: {size}</div>
            <button onClick={() => { navigate(`/users/storage/${props.user.id}`) }}>Storage</button>

        </div>
    )
}

export default UserItem