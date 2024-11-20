import React, { useEffect } from 'react'

function NewRes() {


    // useEffect(() => {
    //     fetch("http://localhost:8000/api/files",
    //     )
    //         .then((response) => response.json())
    //         .then(item => console.log(item))
    // }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        fetch('http://localhost:8000/api/files/', {
            method: 'POST',
            headers: {
                Authorization: 'Token 75acb065e72e2a86a4f9a9854c08c8d609392946'
            },
            body: formData
          })
    }

    return (
        <>
            <div>NewRes</div>
            <form action="" method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
            <input name="file" type="file"/>
            <input type="text" name='name'placeholder='name'/>
            <input type="text" name='size'placeholder='size'/>
            <input type="text" name='comment'placeholder='comment'/>
            <input type="text" name='path'placeholder='path'/>
            <input type="text" name='url'placeholder='url'/>
            <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default NewRes