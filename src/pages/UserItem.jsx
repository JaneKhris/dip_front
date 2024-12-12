import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { getSize } from '../utils/utils'

function UserItem(props) {

    const { token, profile } = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const [size, setSize] = useState('')
    const [self, setSelf] = useState('')
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
                let common = 0
                item.forEach((file) => {
                    common += file.size
                })
                setFiles(item)
                setSize(common)
            })
        if (props.user.id == profile.id) {
            console.log('self')
            setSelf('self')
        }
    }
        , [])


    const handleUserDelete = (evt) => {
        fetch(import.meta.env.VITE_PORT + `/users/${props.user.id}/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${token}`
            },
        })
            .then(response => {
                if (response.ok) {
                    evt.target.closest('.user-container').remove()
                }
            })
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

    const handleToStorage = () => {
        navigate(`/users/storage/${props.user.id}`)
    }


    return (
        <tr className={`user-row ${self}`}>
            <td className='user-username'>{props.user.username}  </td>
            <td className='user-firstname'>{props.user.first_name}  </td>
            <td className='user-lastname'>{props.user.last_name}  </td>
            <td className='user-email'>{props.user.email}</td>
            <td>Count:{files.length}</td>
            <td>Size: {getSize(size)}</td>

            <td>
                {!self &&
                    <>
                        <label htmlFor="name">Is Staff:</label>
                        <input
                            onChange={handleUserStaffChange}
                            type="checkbox"
                            id="name"
                            name="name"
                            defaultChecked={props.user.is_staff}
                        />
                    </>
                }
            </td>
            <td>
                {!self &&
                    <button onClick={handleUserDelete}>Delete</button>
                }
            </td>
            <button onClick={handleToStorage}>Storage</button>

        </tr>
    )
}

export default UserItem