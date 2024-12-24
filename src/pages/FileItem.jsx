import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getSize } from '../utils/utils'
import Cookies from 'js-cookie'

function FileItem(props) {

  const CSRFToken = Cookies.get('csrftoken')

  const handleFileDelete = (evt) => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.file.id}/`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        "X-CSRFToken": CSRFToken
      },
    })
      .then(response => {
        if (response.ok) {
          evt.target.closest('.file-row').remove()
        }
      })
  }

  const handleDownload = () => {
    document.location.href = import.meta.env.VITE_PORT + `/download/${props.file.id}`
  }

  const handleCopyLink = async () => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.file.id}/`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "X-CSRFToken": CSRFToken
      },
    })
      .then(response => response.json())
      .then(item => {
        navigator.clipboard.writeText('http://localhost:3000/download/' + item.url).then(function () {
          console.log('Текст успешно скопирован в буфер обмена');
        }, function (err) {
          console.error('Произошла ошибка при копировании текста: ', err);
        });

      })

  };



  return (
    <>
      <td className='file-name'>{props.file.name}</td>
      <td className='file-size'>{getSize(props.file.size)}</td>
      <td className='file-comment'>{props.file.comment}</td>
      <td className='file-downloaded'>{props.file.downloaded_at}</td>
      <td>
        <button onClick={handleDownload}>Download</button>
      </td>
      <td>
        <button onClick={props.handleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleFileDelete}>Delete</button>
      </td>
      <td>
        <button onClick={handleCopyLink}>Link</button>
      </td>
      </>
  )
}

export default FileItem