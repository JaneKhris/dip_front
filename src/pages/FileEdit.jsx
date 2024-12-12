import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function FileEdit(props) {
  const { token } = useContext(AuthContext)

  const [file, setFile] = useState({})

  useEffect(() => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      },
    })
      .then((response) => response.json())
      .then(item => setFile(item))


  }, [])




  return (
    <tr className='file-edit'>
      <td colSpan={8}>
        Edit file
        <form action="" onSubmit={props.handleSubmit}>
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