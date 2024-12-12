import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function AddFile() {

    const naigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        formData.set('name', 'name');
        formData.set('size', 0);
        formData.set('path', 'path');
        formData.set('url', 'url');
        fetch(import.meta.env.VITE_PORT + '/files/', {
            method: 'POST',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            },
            body: formData
          })
          .then(response => {
            console.log(response)
            if (response.ok) {
                evt.target.reset()
            }
        })

        naigate('/files')
    }

    return (
        <>
            <div>Add File</div>
            <form action="" method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
            <input name="file" type="file"/>
            <input type="text" name='comment'placeholder='comment'/>
            <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default AddFile