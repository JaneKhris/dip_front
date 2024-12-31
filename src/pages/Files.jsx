import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react"
import FileItem from './FileItem';
import { AuthContext } from '../context/AuthContext';
import FileEdit from './FileEdit';
import AddFile from './AddFile';

import Cookies from 'js-cookie';


function Files() {

  const { isAuth, profile } = useContext(AuthContext)

  const [files, setFiles] = useState([])
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

  const CSRFToken = Cookies.get('csrftoken')

  useEffect(() => {
    if (isAuth) {
      
      fetch(import.meta.env.VITE_PORT + `/files/?owner=${getId()}&ordering=name`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          "X-CSRFToken": CSRFToken
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
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "X-CSRFToken": CSRFToken
      },
      body: formData
    })
      .then(response => console.log(response))

    setFileId(0)
  }

  return (
    <>
      {true &&
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

          {files[0] && <div className="files">
            <table className="files__table">
              <thead className='files__table head'>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Comment</th>
                  <th>Downloaded at</th>
                  <th>Download</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) =>
                  <>
                    <tr className='file-row' key={file.id}>
                      <FileItem
                        className='file__item'
                        file={file}
                        handleEdit={() => { setFileId(fileId ? 0 : file.id) }}
                      />
                    </tr>
                    {fileId == file.id &&
                      <FileEdit
                        id={file.id}
                        handleSubmit={handleSubmitEdited}
                      />}
                  </>
                )}

              </tbody>
            </table>

          </div>}
        </>}
    </>
  )
}

export default Files