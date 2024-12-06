import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getSize } from '../utils/utils'

function FileItem(props) {
  const {token} = useContext(AuthContext)

  const handleFileDelete = (evt) => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.file.id}/`, {
        method: 'DELETE',
        headers: {
            Authorization: `Token ${token}`
        },
      })
      .then(response => console.log(response))
    evt.target.closest('.file-container').remove()

  }

  const handleDownload = () => {
    document.location.href = import.meta.env.VITE_PORT + `/download/${props.file.id}`
  }

  const handleCopyLink = async () => {
    fetch(import.meta.env.VITE_PORT + `/files/${props.file.id}/`, {
      method: 'GET',
      headers: {
          Authorization: `Token ${token}`
      },
    })
    .then(response => response.json())
    .then(item => {
      navigator.clipboard.writeText('http://localhost:3000/download/' + item.url).then(function() {
        console.log('Текст успешно скопирован в буфер обмена');
      }, function(err) {
        console.error('Произошла ошибка при копировании текста: ', err);
      });  

    })

  };



  return (
    <div className={'file-container'}>
      <span className='file-name'>  Name: {props.file.name}</span>
      <span className='file-size'>  Size: {getSize(props.file.size)}</span>
      <span className='file-comment'>  Comment: {props.file.comment}</span>
      <span className='file-owner'>  Owner: {props.file.owner}</span>
      <div className='file-downloaded'>{props.file.downloaded_at}</div>
      <button onClick={handleDownload}>Download</button>
      <button onClick={props.handleEdit}>Edit</button>
      <button onClick={handleFileDelete}>Delete</button>
      <button onClick={handleCopyLink}>Link</button>

    </div>
  )
}

export default FileItem