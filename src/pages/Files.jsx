import React from 'react'
import { useLoaderData, Await, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react"
import FileItem from './FileItem';
import { AuthContext } from '../context/AuthContext';
import FileEdit from './FileEdit';
import AddFile from './AddFile';


function Files() {

  const { token, profile } = useContext(AuthContext)


  const [files, setFiles] = useState([])

  // const {files} = useLoaderData()

  const [fileId, setFileId] = useState(0)
  const [addFile, setAddFile] = useState(false)
  const navigate = useNavigate()

  const { id } = useParams()

  const getId = () => {
    if (id) {
      return id
    }
    return profile.id
  }



  useEffect(() => {
    if (token) {
      fetch(import.meta.env.VITE_PORT + `/files/?owner=${getId()}`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`
        },
      })
        .then((response) => response.json())
        .then(item => setFiles(item))
    }
  }, [])


  const handleSubmitEdited = (evt) => {
    evt.preventDefault()

    const formData = new FormData(evt.target)
    fetch(import.meta.env.VITE_PORT + `/files/${fileId}/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${token}`
      },
      body: formData
    })
      .then(response => console.log(response))

    setFileId(0)
  }


  return (
    <>
      {token &&
        <>
          {!id &&
            <div>
              <button onClick={() => { setAddFile(!addFile) }}>Add file</button>
              {addFile && <AddFile />}
            </div>
          }

          {id &&
            <button onClick={() => { navigate('/users') }}>List of users</button>
          }

          <div className="files">

            <h1>Files page</h1>
            <ul className="files__item">
              {files.map((file) =>
                <div key={file.id}>
                  <FileItem
                    className='file__item'
                    file={file}
                    handleEdit={() => { setFileId(fileId ? 0 : file.id) }}
                  >

                  </FileItem>
                  {fileId == file.id &&
                    <FileEdit
                      id={file.id}
                      handleSubmit={handleSubmitEdited}
                    />}
                </div>
              )}
            </ul>
          </div>
        </>}
      <div>No token</div>
    </>
  )
}

export default Files