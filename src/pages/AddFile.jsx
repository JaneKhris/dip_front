import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie';


function AddFile() {

    const naigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        formData.set('name', 'name');
        formData.set('size', 0);
        formData.set('path', 'path');
        formData.set('url', 'url');
        // const 
        formData.get('file')
        console.log(formData.get('file')['name'])

        const CSRFToken = Cookies.get('csrftoken')

        fetch(import.meta.env.VITE_PORT + '/files/', {
            credentials: 'include',
            method: 'POST',
            headers: {
                "X-CSRFToken": CSRFToken
              },
            body: formData,
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
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
            <input name="file" type="file"/>
            <input type="text" name='comment'placeholder='comment'/>
            <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default AddFile