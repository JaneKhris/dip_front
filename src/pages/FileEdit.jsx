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
    <div>
      {file.name}
      <form action="" onSubmit={props.handleSubmit}>
        <input name="name" type="text" defaultValue={file.name} />
        <input name="comment" type="text" defaultValue={file.comment} />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default FileEdit