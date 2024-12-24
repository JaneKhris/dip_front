import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cookies from 'js-cookie'

function FileEdit(props) {

  const [file, setFile] = useState({})

  const CSRFToken = Cookies.get('csrftoken')

  useEffect(() => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.id}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "X-CSRFToken": CSRFToken
      },
    })
      .then((response) => response.json())
      .then(item => setFile(item))
  }, [])




  return (
    <tr className='file-edit'>
      <td colSpan={8}>
        Edit file
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" defaultValue={file.name} />
            <label htmlFor="comment">Comment: </label>
            <input name="comment" type="text" defaultValue={file.comment} />
          <button>Edit</button>
        </form>
      </td>
    </tr>
  )
}

export default FileEdit